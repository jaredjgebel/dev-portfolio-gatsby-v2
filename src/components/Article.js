import React from 'react'
import { Col, Row } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import { FlexCol } from './styles/flex'

const Article = ({ text, visible }) => (
  <FlexCol>
    <article hidden={visible}>{text}</article>
  </FlexCol>
)

export default Article
