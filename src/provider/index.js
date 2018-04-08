import React, { Component } from 'react';
import { Provider } from '../context';
class NotronProvider extends Component {
  componentDidMount() {
      
  }
  render() {
    const { children, store } = this.props;
    return <Provider value={store}>{children}</Provider>;
  }
}

export default NotronProvider;