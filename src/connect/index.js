import React from 'react';
import { Consumer } from "../context";
import { isFunction, isObject } from '../utils';
import { Empty } from '../components';
/*
  simple connect hoc
*/
const connect = (mapStateToProps, mapDispatchToProps) => (_component=Empty ) => (props = {}) => {
  const DynamicComponent = _component || (() => {});
  return (
    <Consumer>
      {store => {
        let forPropsFromState = {};
        let forPropsFromDispatch = {};
        if (isFunction(mapStateToProps)) {
          forPropsFromState = mapStateToProps(store.getState(), props);
          if (!isObject(forPropsFromState)) {
            forPropsFromState = {};
            console.warn('forPropsFromState is not object');
          }
        }
        if (isFunction(mapDispatchToProps)) {
          forPropsFromDispatch = mapDispatchToProps(store.dispatch, props);
          if (!isObject(forPropsFromDispatch)) {
            forPropsFromDispatch = {};
            console.warn('forPropsFromState is not object');
          }
        }
        return <DynamicComponent {...props} {...forPropsFromState} {...forPropsFromDispatch}/>;
      }}
    </Consumer>
  );
};

export default connect;