import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import AgoraBodyField from './AgoraBodyField';
import { AgoraBodyFieldProps } from './AgoraBodyField';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Collapse from '@material-ui/core/Collapse';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Moment from 'react-moment';
import RenderMarkdown from 'components/RenderMarkdown';
import ReplyIcon from '@material-ui/icons/Reply';
import ReportIcon from '@material-ui/icons/Report';
import StarButton from 'components/StarButton';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    action: {
      '& + &': {
        marginLeft: theme.spacing(1),
      },
      '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(0.5),
      },
      '&:hover, &:focus': {
        color: theme.palette.text.primary,
      },
      color: theme.palette.text.secondary,
      padding: 0,
    },
    divider: {
      background: theme.palette.divider,
      '& hr': {
        height: '100%',
        width: 5,
      },
      '&:focus': {
        background: theme.palette.action.focus,
        transition: theme.transitions.create('background', {
          duration: theme.transitions.duration.shortest,
          easing: theme.transitions.easing.easeInOut,
        }),
      },
      display: 'block',
      height: `calc(100% - ${theme.spacing(6)}px)`,
      margin: '0 auto',
      transition: theme.transitions.create('background', {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
    list: {
      '& > li': {
        display: 'inline-block',
      },
      '& li + li': {
        marginLeft: theme.spacing(1),
      },
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    root: {},
    textGrid: {
      marginTop: theme.spacing(1),
    },
    textGridFolded: {
      marginTop: theme.spacing(1.3),
    },
  }),
);

export interface CommentProps extends AgoraBodyFieldProps {
  children?: React.ReactNode;
  folded?: boolean;
  author: React.ReactNode;
  time: Date;
  replyField?: React.ReactNode;
  isAuthor?: boolean;
  handleDelete?: () => any;
}

function Comment({
  children,
  folded = false,
  author,
  body,
  time,
  replyField,
  isAuthor,
  handleEdit = () => {},
  handleDelete = () => {},
}: CommentProps): React.ReactElement {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<boolean>(folded);
  const [showReplyField, setReplyField] = React.useState<boolean>(false);

  const handleExpanded = (): void => {
    setExpanded(!expanded);
  };

  const handleReplyField = (): void => {
    setReplyField(!showReplyField);
  };

  const [isEditing, setEditing] = useState<boolean>(false);

  return (
    <Box alignItems="stretch" display="flex">
      <Box alignItems="stretch">
        {expanded === false ? (
          <>
            <StarButton
              confettiConfig={{
                elementCount: 15,
                startVelocity: 20,
              }}
              fontSize="small"
            />
            <ButtonBase className={classes.divider} onClick={handleExpanded}>
              <Divider flexItem orientation="vertical" />
            </ButtonBase>
          </>
        ) : (
          <IconButton onClick={handleExpanded}>
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
      <Box className={clsx(classes.textGrid, { [classes.textGridFolded]: folded })} flexGrow={1}>
        <Grid item>
          <ul className={classes.list}>
            <li>{author}</li>
            <li>
              <Moment fromNow>{time}</Moment>
            </li>
          </ul>
        </Grid>
        <Collapse in={!expanded} timeout="auto" unmountOnExit>
          <Grid>
            {isEditing ? (
              <AgoraBodyField
                body={body}
                cancelEdit={() => setEditing(false)}
                handleEdit={(values, { setSubmitting, ...args }) => {
                  handleEdit(values, {
                    ...args,
                    setSubmitting: (bool: boolean) => {
                      setEditing(bool);
                      setSubmitting(bool);
                    },
                  });
                }}
              />
            ) : (
              <RenderMarkdown source={body} />
            )}
            <div>
              <Button className={classes.action} onClick={handleReplyField} size="small">
                <ReplyIcon fontSize="inherit" />
                Reply
              </Button>
              <Button className={classes.action} size="small">
                <ReportIcon fontSize="inherit" />
                Report
              </Button>
              {isAuthor && (
                <>
                  <Button className={classes.action} onClick={() => setEditing(true)} size="small">
                    <EditIcon fontSize="inherit" />
                    Edit
                  </Button>
                  <Button className={classes.action} onClick={handleDelete} size="small">
                    <DeleteIcon fontSize="inherit" />
                    Delete
                  </Button>
                </>
              )}
            </div>
            {showReplyField && replyField}
            {children}
          </Grid>
        </Collapse>
      </Box>
    </Box>
  );
}

export default Comment;
