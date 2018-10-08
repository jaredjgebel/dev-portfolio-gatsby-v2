import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavLinkStyle = styled.div`
   color: whitesmoke;
   text-align: center;
`

const NavLink = ({ name, href }) => {
   return (
      <NavLinkStyle>
         <Link
            to={`${href}`}
            style={{
               color: 'whitesmoke',
               padding: '0.5rem 0.5rem',
               fontStyle: 'normal',
               textDecoration: 'none',
            }}
         >
            {name}
         </Link>
      </NavLinkStyle>
   )
}

export default NavLink 
