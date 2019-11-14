import React, { Component } from "react";
import PillLayout from "./PillLayout";
import Article from "./Article";
import Pill from "./Pill";

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
      <Pill
        active={this.state[edge.node.title]}
        text={edge.node.title}
        onClick={this.onClick}
        key={i}
      />
    ));

    const Articles = edges.map((edge, i) => (
      <Article
        text={edge.node.article}
        technologies={edge.node.technologies}
        github={edge.node.github}
        demo={edge.node.demo}
        projectHighlights={edge.node.projectHighlights}
        visible={!this.state[edge.node.title]}
        key={i}
      />
    ));

    return (
      <>
        <PillLayout>{Pills}</PillLayout>
        <br />
        {Articles}
      </>
    );
  }
}

export default PillContainer;
