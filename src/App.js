import React from 'react';
import Resume from './components/Resume';

function App() {
  return (
    <div className="root">
      <Resume />
      <style jsx>{`
        .root{
          height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default App;
