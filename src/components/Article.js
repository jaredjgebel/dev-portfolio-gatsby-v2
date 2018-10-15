import React from 'react'
import { FlexCol } from './styles/flex'

const Article = ({ text, visible }) => (
  <FlexCol>
    <article hidden={visible} style={{ padding: '0.25rem 1rem 0.25rem 1rem' }}>
      {text}
    </article>
  </FlexCol>
)

export default Article
