import React, { Component } from "react";
import Pill from "./Pill";
import { Row } from "styled-bootstrap-grid";
import { FlexCol } from "./styles/flex";
import Article from "./Article";

class PillContainer extends Component {
  constructor(props) {
    super(props);

    const { edges } = props;

    let stateObj = {};

    edges.forEach((edge, i) => {
      stateObj[edge.node.title] = i === 0;
    });

    this.state = stateObj;
    this.onClick = this.onClick.bind(this);
  }

  onClick = e => {
    const target = e.target.innerHTML;

    Object.keys(this.state).forEach(title => {
      if (this.state[title]) {
        this.setState({ [title]: false });
      }
    });

    this.setState({ [target]: true });
  };

  render() {
    const { edges } = this.props;

    const Pills = edges.map((edge, i) => (
      <FlexCol sm={12} md={6}>
        <Pill
          active={this.state[edge.node.title]}
          text={edge.node.title}
          onClick={this.onClick}
          key={i}
        />
      </FlexCol>
    ));

    const Articles = edges.map((edge, i) => (
      <Article
        text={edge.node.article}
        technologies={edge.node.technologies}
        github={edge.node.github}
        projectHighlights={edge.node.projectHighlights}
        visible={!this.state[edge.node.title]}
        key={i}
      />
    ));

    return (
      <>
        <Row>{Pills}</Row>
        <br />
        <Row>{Articles}</Row>
      </>
    );
  }
}

export default PillContainer;
