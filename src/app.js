import React, { Component } from "react";
import { Provider } from "./context";
import { IntroCon } from "./modules";

class ScalpelApp extends Component {
  render() {
    const { data } = this.props;
    return (
      <Provider value={data}>
          <IntroCon type="mobile" />
      </Provider>
    );
  }
}

export default ScalpelApp;
