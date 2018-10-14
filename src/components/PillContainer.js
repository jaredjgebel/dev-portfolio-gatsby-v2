import React, { Component } from 'react'
import { Col, Row } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import { FlexCol } from './styles/flex'
import Pill from './Pill'
import Article from './Article'

class PillContainer extends Component {
  constructor(props) {
    super(props)

    const { edges } = props

    let stateObj = {}

    edges.forEach((edge, i) => {
      stateObj[edge.node.title] = i === 0 ? 'active' : 'inactive'
    })

    this.state = stateObj
    this.onClick = this.onClick.bind(this)
  }

  onClick = e => {
    const target = e.target.innerHTML

    //   Object.keys(this.state).forEach(title => {
    //     if (title === true) {
    //       this.setState({ [title]: false })
    //     }
    //   })
    //   if (this.state[target]) {
    //     this.setState({ [target]: true })
    //   }
  }

  render() {
    const { edges } = this.props

    const Pills = edges.map((edge, i) => (
      <Pill
        active={this.state[edge.node.title]}
        text={edge.node.title}
        onClick={this.onClick}
        key={i}
      />
    ))

    const Articles = edges.map((edge, i) => (
      <Article
        text={edge.node.article}
        visible={this.state[edge.node.title]}
        key={i}
      />
    ))

    return (
      <div>
        {Pills}
        {Articles}
      </div>
    )
  }
}

export default PillContainer
