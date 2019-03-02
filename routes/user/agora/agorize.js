const validator = require( 'validator' );
const validateObjectID = require( 'mongodb' ).ObjectID.isValid;

const checkGroup = require( './../../../models/check' ).checkGroup;
const checkBadges = require( './../../../models/check' ).checkBadges;

const agorize = require( './../../../models/user/agora' ).agorize;

module.exports.agorize = async function( req, res ) {
  // Fetches all the fields and their values
  const id = req.user;
  const body = req.body.body;
  const type = req.body.type;
  const group = req.body.group;
  // Is not required
  const badges = req.body.badges;

  // Post specific
  const title = req.body.title;
  const tags = req.body.tags;

  // Comment specific
  const replyTo = req.body.replyTo;

  // Checks that they all are strings, validatorjs only allows string (prevent errors)
  if ( typeof body !== 'string' || typeof type !== 'string' || typeof group !== 'string' ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'Only strings are accepted' } );
  if ( !validator.isIn( type, [ 'text', 'comment', 'link', 'question' ] ) ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'You can only post a (text|comment|link|question)', 'typeVariable': type } );
  if ( !validator.isLength( body, { min: 0, max: 10000 } ) ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'Body is too long', body } );

  if ( group !== 'user' ) {
    if ( !validateObjectID( group ) ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'group is not an objectID', group } );
    if ( !( await checkGroup( id, group ) ) ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'You are not authorised to use that role', group } );
  } else {
    for ( let badge of badges ) {
      if ( !validateObjectID( badge ) ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'badge is not an objectID', badge } );
    }
    if ( !( await checkBadges( id, badges ) ) ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'You are not authorised to use those badges', badges } );
  }

  // Specific validation
  if ( type === 'text' || type === 'question' ) {
    // Validates the length of the post
    if ( typeof title != 'string' ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'Only strings are accepted', title } );
    if ( !validator.isLength( title, { min: 3, max: 100 } ) ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'Title is too long/short', title } );

    if ( !Array.isArray( tags ) ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'Tags has to be an array', tags } );
    if ( tags.length > 10 ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'Too many tags, max 10', tags } );
    for ( let tag of tags ) {
      if ( typeof tag !== 'string' ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'Only strings allowed for tags', tag } );
      if ( !validator.isLength( tag, { min: 3, max: 32 } ) ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'Tag is too long/short', tag } );
    }

  } else if ( type === 'comment' ) {
    // Validates the length of the post
    if ( !validateObjectID( replyTo ) ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'replyTo is not an objectID', replyTo } );
  } else {
    if ( !validator.isURL( body, { protocols: [ 'http', 'https' ] } ) ) return res.status( 400 ).send( { 'type': 'fail', 'reason': 'Link posts may only be links', body } );
  }
  const status = await agorize( id, { title, body, type, group, badges, tags, replyTo } );
  if ( status.error ) {
    return res.status( 500 ).send( { 'type': 'fail', 'reason': status.reason } );
  } else {
    return res.status( 201 ).send( { 'type': 'success' } );
  }

};