import React, { Fragment } from 'react';
import Header from './components/Header';
import { renderRoutes } from 'react-router-config';

const App = (props) => {
  return (
    <Fragment>
      <Header {...props} />
      {renderRoutes(props.route.routes)}
    </Fragment>
  );
};

export default App;
