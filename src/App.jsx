import './app.scss'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className='sections'>
        <Intro/>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
