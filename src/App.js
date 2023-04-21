import LandingPage from './components/LandingPage/LandingPage';
import SkyBackground from './components/SkyBackground/SkyBackground';
import './App.css';

function App() {
  return (
    <div className="App">
      <SkyBackground>
        <LandingPage />
      </SkyBackground>

    </div>
  );
}

export default App;
