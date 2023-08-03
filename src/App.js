import Footer from './Components/Footer';
import Section4 from './Components/Section4';
import NavbarComp from './Components/Navbar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import './index.css';

function App() {
  return (
    <div>
      <NavbarComp />
      <div className='mainDiv'>
        <Section1 />
      </div>
      <div className='section2'>
      <Section2/>
      </div>
      <div className='section3'>
      <Section3/>
      </div>
      <Section4/>
      <Footer/>
    </div>
  );
}

export default App;
