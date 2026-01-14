import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Certification from './Components/Certification/Certification';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Foter from './Components/Foter/Foter';

const App = () => {
  return (
    <div className='bg-gray-950 h-auto w-full overflow-hidden'>
      <Navbar/>
      <Home/>
      <About/>
      <Certification/>
      <Experience/>
      <Projects/>
      <Foter/>
    </div>
  );
}
    
export default App;
