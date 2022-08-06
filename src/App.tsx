
import About from './components/About';
import Description from './components/description/Description';
import HowToUse from './components/HowToUse';
import Nav from './components/Nav';
import Preview from './components/preview/Preview';


function App() {
  return (
   <div className='min-h-[100vh]'>
     <Nav startedSession={false}/>
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
