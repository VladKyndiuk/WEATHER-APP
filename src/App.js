import { useState } from 'react';
import './App.css';
import Search from './components/search/Search';
import WeatherNow from './components/weather/WeatherNow'

import { API_WEATHER_URL, API_WEATHER_KEY } from "./api/citiesApi";
import Loader from './components/loader/Loader';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [start,setStart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onSearchChange = (searchData) => {
    setStart(true);
    setIsLoading(true);
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${API_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_WEATHER_KEY}&units=metric`);
    const forecastWeatherFetch = fetch(`${API_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_WEATHER_KEY}&units=metric`);




    Promise.all([currentWeatherFetch,forecastWeatherFetch]).then( async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeather({city: searchData.label,...weatherResponse});
      setForecast({city: searchData.label,...forecastResponse});
      setIsLoading(false);


    }).catch((err)=>console.log(err));
  }

  return (
    <div className="App">
      <div className="container">
        <Search onSearchChange={onSearchChange} />
        {start ? <>
          {isLoading ? <Loader/>
          :<WeatherNow currentWeather={currentWeather} forecast={forecast}/>        
          }
        </> : <h1 className=' center'>Choose Your City</h1>
      }
    
      </div>
    </div>
  );
}
export default App;
