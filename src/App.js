
import './App.css';
import Gallery from './components/Gallery';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <div className="hero">
        <Hero/>
      </div>
      <div id='Gallery' className="gallery">
        <Gallery/>
      </div>
    </div>
  );
}

export default App;
