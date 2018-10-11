import React from 'react'
import { Link } from 'gatsby'

const NavLink = ({ name, href }) => {
  return (
    <Link
      to={`${href}`}
      style={{
        color: 'whitesmoke',
        padding: '0.5rem 0.5rem',
        fontStyle: 'normal',
        textDecoration: 'none',
        textAlign: 'center',
      }}
    >
      {name}
    </Link>
  )
}

export default NavLink
