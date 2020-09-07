import React, { Fragment } from 'react';

import Header from './components/Header/Header';

function App({ children }) {
  return (
    <Fragment>
      <Header />
      <main className="main">
        {children}
      </main>
    </Fragment>
  );
}

export default App;