import HelmetContainer from './HelmetContainer'
import ForecastContainer from './ForecastContainer';
import NavBar from "./NavBar"
import './App.css';

function App() {
  return (
    <div>
      <HelmetContainer />
      <NavBar/>
      <ForecastContainer />
    </div>
  );
}

export default App;
