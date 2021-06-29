import './App.css';
import "bootstrap/dist/css/bootstrap.min.css" 
import Navbar from "./components/Navbar"
import Header from './components/Header'
import Particles from './Particles'
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Particles />
    <Navbar />
    <Header />
    <About />
    <Skills />
    </>
  );
}

export default App;
