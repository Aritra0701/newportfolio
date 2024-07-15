import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experiance from './components/Experiance';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PortFolio from './components/PortFolio';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <About/>
       <PortFolio/>
       <Experiance/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
