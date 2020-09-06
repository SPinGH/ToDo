import React, { Fragment } from 'react';

import Header from './components/Header/Header';

function App({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}

export default App;