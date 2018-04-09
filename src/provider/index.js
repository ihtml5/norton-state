import React, { Component } from 'react';
import { Provider } from '../context';

export const createProvider = (storeKey = '_store') => {
  class NotronProvider extends Component {
    constructor(props) {
      super(props);
      this.state = {
        [storeKey]: props.store,
      };
    }
    componentDidMount() {
      const { store } = this.props;
      this[storeKey] = store.getState();
      this._subscribe = store.subscribe(() => this.update());
    }
    componentWillUnmount() {
      this._subscribe.unsubscribe();
    }
    update() {
      const { store } = this.props;
      if (store.getState() !== this[storeKey]) {
        this.setState(
          {
            [storeKey]: {
              ...store,
            },
          },
          () => {
            this[storeKey] = this.state[storeKey].getState();
          },
        );
      }
    }
    render() {
      const { children } = this.props;
      return <Provider value={this.state[storeKey]}>{children}</Provider>;
    }
  }
  return NotronProvider;
};

export default createProvider();
