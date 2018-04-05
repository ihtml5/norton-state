import React from 'react';
import { Consumer } from "../context";
import { isFunction, isObject } from '../utils';
import { Empty } from '../components';

const connect = mapStateToProps => (_component=Empty ) => (props = {}) => {
  const DynamicComponent = _component || (() => {});
  return (
    <Consumer>
      {state => {
        let forPropsFromState = {};
        if (isFunction(mapStateToProps)) {
          forPropsFromState = mapStateToProps(state);
          if (!isObject(forPropsFromState)) {
            forPropsFromState = {};
            console.warn('forPropsFromState is not object');
          }
        }
        return <DynamicComponent {...props} {...forPropsFromState}/>;
      }}
    </Consumer>
  );
};

export default connect;