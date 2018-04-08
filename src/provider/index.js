import React, { Component } from 'react';
import { Provider } from '../context';
class NotronProvider extends Component {
  constructor(props) {
      super(props);
      this.state = {
          store: props.store,
      };
  }
  componentDidMount() {
      const { store } = this.props;
      this._previousState = store.getState();
      this._subscribe = store.subscribe(() => this.update());
  }
  componentWillUnmount() {
      this._subscribe.unsubscribe();
  }
  update() {
      const { store } = this.props;
      if (store.getState() !== this._previousState) {
          this.setState({
              store: {
                  ...store,
                  isChanged: true,
              }
          }, () => {
              this._previousState = this.state.store.getState();
          })
      }
  }
  render() {
    const { children } = this.props;
    const { store } = this.state;
    return <Provider value={store}>{children}</Provider>;
  }
}

export default NotronProvider;