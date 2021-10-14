import React from 'react';

import Header from './components/Header/Header';

function App({ children }) {
  return (
    <>
      <Header />
      <main className='main'>
        {children}
      </main>
    </>
  );
}

export default App;