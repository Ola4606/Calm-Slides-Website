import React from 'react';
import Description from './components/Description';
import Nav from './components/Nav';

function App() {
  return (
   <div className='bg-slate-100 min-h-[100vh]'>
     <Nav />
     <Description />
   </div>
  );
}

export default App;
