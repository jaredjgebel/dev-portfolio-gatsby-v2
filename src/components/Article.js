import React from 'react'
import { FlexCol } from './styles/flex'
import githubMarkDark from '../images/Github-Mark-64px.png'

const Article = ({
  text,
  technologies,
  github,
  projectHighlights,
  visible,
}) => (
  <div hidden={visible}>
    <FlexCol>
      <article style={{ padding: '0.25rem 1rem 0.25rem 1rem' }}>{text}</article>
    </FlexCol>
    <FlexCol>
      <h5 style={{ paddingTop: '1rem' }}>Project Highlights</h5>
      <ul>
        {projectHighlights.map((highlight, i) => (
          <li key={i}>{highlight}</li>
        ))}
      </ul>
    </FlexCol>
    <FlexCol>
      <h5>Technologies</h5>
      <p>
        {technologies.map((technology, i) => (
          <a href={technology.link} style={{ textDecoration: 'none' }}>
            {technology.name}
            {i === technologies.length - 1 ? '' : ', '}
          </a>
        ))}
      </p>
    </FlexCol>
    <FlexCol>
      <a href={github} style={{ textAlign: 'center' }}>
        <img src={githubMarkDark} alt="Project Repository" />
      </a>
    </FlexCol>
  </div>
)

export default Article
