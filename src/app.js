import React from 'react';
import NotronProvider from './provider';
import { IntroCon } from './modules';

const ScalpelApp = ({ store }) => (
  <NotronProvider store={store}>
    <IntroCon type="mobile" />
  </NotronProvider>
);

export default ScalpelApp;
