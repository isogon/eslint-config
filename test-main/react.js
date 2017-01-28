import React, { Component, PropTypes } from 'react';

const Stateless = ({ children }) => (
  <div>{children}</div>
);

Stateless.propTypes = {
  children: PropTypes.node.isRequired,
};

class Stateful extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      foo: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.foo ? this.props.children : 'wrong state'}
      </div>
    );
  }
}

export default (
  <div>
    <Stateless>Stateless component</Stateless>
    <Stateful>Stateful component</Stateful>
  </div>
);
