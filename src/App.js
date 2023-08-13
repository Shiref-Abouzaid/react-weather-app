import logo from './logo.svg';
import Search from './components/search/search';
import './App.css';
import CurrentWeather from './components/current-weather';
function App() { 
  const handleOnSearchChange = (searchData) => {
    console.log('search data >>>>>>>>>>>>>>' , searchData)
  }
  return (
    <div className="container">
<Search onSearchChange={handleOnSearchChange}/>
<CurrentWeather/>
    </div>
  );
}

export default App;
