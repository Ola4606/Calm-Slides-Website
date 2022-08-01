import React from 'react';
import About from './components/About';
import Description from './components/Description';
import Nav from './components/Nav';

function App() {
  return (
   <div className='bg-slate-100 min-h-[100vh]'>
     <Nav />
     <Description />
     {/* about */}
     <About /> 
     {/* how to use */}
     <Description />
     {/* preview */}
     <Description />
   </div>
  );
}

export default App;
