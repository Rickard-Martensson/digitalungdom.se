import React from 'react'
// import { Button } from '@components'
// import Button from '@components/button'
import { Dropdown, Menu, Button } from 'antd'
import Link from '@components/link'

export default ({ profile, logOut, translations }) => (
		<Link
      loading={profile.authing}
      style={{width: "100%"}}
      to="/min-profil"
      type="button"
    >
      {
			 profile.username ?
			 profile.username
				:
				'Loading...'
			}
    </Link>
)

/*<Button onClick={logOut}>{translations["Log out"]}</Button>*/
