import React from 'react'
import styled from 'styled-components'

const ContactBackground = styled.div`
   height: 18rem;
   background: #16222a;
   background: -webkit-linear-gradient(to right, #3a6073, #16222a);
   background: linear-gradient(to right, #3a6073,#16222a);
`

const Contact = () => (
   <ContactBackground>
      <p>Contact</p>
   </ContactBackground>
)

export default Contact