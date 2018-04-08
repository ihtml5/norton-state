import React, { Component } from "react";
import NotronProvider  from "./provider";
import { IntroCon } from "./modules";

class ScalpelApp extends Component {
  constructor(props) {
    super(props);
    this._forceUpdate = this._forceUpdate.bind(this);
  }
  _forceUpdate () {
    this.forceUpdate();
  }
  render() {
    const { store } = this.props;
    return (
      <NotronProvider store={Object.assign(store, {_forceUpdate: this._forceUpdate})}>
          <IntroCon type="mobile" />
      </NotronProvider>
    );
  }
}

export default ScalpelApp;
