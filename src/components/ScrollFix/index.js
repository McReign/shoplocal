import React, { Component } from 'react';

class ScrollFix extends Component {

  componentDidUpdate(prevProps) {
    const route = prevProps.location.split('/');
    if (prevProps.location !== this.props.location && route[route.length-2] !== 'categories') {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default ScrollFix;
