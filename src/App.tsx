
import About from './components/About';
import Description from './components/Description';
import HowToUse from './components/HowToUse';
import Nav from './components/Nav';
import Preview from './components/Preview';

function App() {
  return (
   <div className='min-h-[100vh]'>
     <Nav />
     <Description />
     {/* about */}
     <About /> 
     {/* how to use */}
     <HowToUse />
     {/* preview */}
     <Preview />
   </div>
  );
}

export default App;
