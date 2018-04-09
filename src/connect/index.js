import React, { Component } from 'react';
import { Consumer } from "../context";
import { isFunction, isObject } from '../utils';
import { Empty } from '../components';
/*
  simple connect hoc
*/
const getDisplayName = name => `NortonConnect${name}`;
const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent=Empty ) => {
  const DynamicComponent = WrappedComponent || Empty;
  const wrappedComponentName = WrappedComponent.displayName
  || WrappedComponent.name
  || 'Component';
  class NortonConnect extends Component {
    render() {
      return (
        <Consumer>
          {store => {
            let forPropsFromState = {};
            let forPropsFromDispatch = {};
            if (isFunction(mapStateToProps)) {
              forPropsFromState = mapStateToProps(store.getState(), this.props);
              if (!isObject(forPropsFromState)) {
                forPropsFromState = {};
                console.warn('forPropsFromState is not object');
              }
            }
            if (isFunction(mapDispatchToProps)) {
              forPropsFromDispatch = mapDispatchToProps(store.dispatch, this.props);
              if (!isObject(forPropsFromDispatch)) {
                forPropsFromDispatch = {};
                console.warn('forPropsFromState is not object');
              }
            }
            return <DynamicComponent {...this.props} {...forPropsFromState} {...forPropsFromDispatch}/>;
          }}
        </Consumer>
      );
    }
  }
  // displayname 用于chrome开发者工具显示
  NortonConnect.displayName = getDisplayName(wrappedComponentName);
  return NortonConnect;
};

export default connect;