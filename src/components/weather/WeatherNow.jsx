import CustomIcon from '../../icons/CustomIcon';
import CustomIconBig from '../../icons/CustomIconBig';
import toDate from '../../func/DateFunc'

import Cell from './Cell'
import ForecastCell from './ForecastCell';

function WeatherNow({currentWeather,forecast}) {


  const currentData = new Date(currentWeather.dt * 1000);


  let options = { weekday: 'long'};

  var sunrise = new Date(currentWeather.sys.sunrise * 1000);
  var sunset = new Date(currentWeather.sys.sunset * 1000);

  document.title = "Weather in " + currentWeather.city.slice(0,currentWeather.city.lastIndexOf(','));
 


  const days = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November"];

  



    return ( 
        <div className='allInformation'>
        {/* CITY NAME */}
        <div className='cityName'>
          {currentWeather.city}
        </div>
        {/* DATE FIELD */}
        <div className='dateNow'>
          {new Intl.DateTimeFormat('en-US', options).format(currentData)} {currentData.getDate()}  {days[currentData.getMonth() + 1]}
        </div>

        {/* COLUMNS */}
        <div className="columns">
          {/* LEFT COLUMN */}
          <div className='column left'>
          <div className='icon-big' >
            <CustomIconBig fill="white" imageTag={currentWeather.weather[0].icon}></CustomIconBig>
          </div>
            <div className='info'>
              <div className='temperature'>{Math.round(currentWeather.main.temp)} °C</div>
              <div className='condition'>{(currentWeather.weather[0].description).charAt(0).toUpperCase() + (currentWeather.weather[0].description).slice(1)}</div>

            </div>
            </div>


            {/* RIGHT COLUMN */}
          <div className='column right'>
            <Cell info={
              `${Math.round(currentWeather.main.feels_like)} °C`} 
              title="Feels" > 
            </Cell>

            <Cell info={
              `${currentWeather.wind.speed} m/s`} 
              title="Wind" > 
            </Cell>


            <Cell info={
              `${sunrise.getHours() < 10 ? '0' + sunrise.getHours() : sunrise.getHours()} : 
              ${sunrise.getMinutes() < 10 ? '0' + sunrise.getMinutes() : sunrise.getMinutes()} `} 
              title="Sunrise" > 
            </Cell>

            
            <Cell info={
              `${Math.round(currentWeather.main.pressure)} mb`} 
              title="Pressure" > 
            </Cell>

            
            <Cell info={
              `${Math.round(currentWeather.main.humidity)} %`} 
              title="Humidity" > 
            </Cell>

            <Cell info={
              `${sunset.getHours() < 10 ? '0' + sunset.getHours() : sunset.getHours()} : 
              ${sunset.getMinutes() < 10 ? '0' + sunset.getMinutes() : sunset.getMinutes()} `} 
              title="Sunset" > 
            </Cell>
          </div>
        </div>



        <div className='text'>Forecast</div>

        <div className='todaysWeather'>
          <ForecastCell dayNumber={1} forecast={forecast}></ForecastCell>
          <ForecastCell dayNumber={2} forecast={forecast}></ForecastCell>
          <ForecastCell dayNumber={3} forecast={forecast}></ForecastCell>
          <ForecastCell dayNumber={4} forecast={forecast}></ForecastCell>
          <ForecastCell dayNumber={5} forecast={forecast}></ForecastCell>
          <ForecastCell dayNumber={6} forecast={forecast}></ForecastCell>
          <ForecastCell dayNumber={7} forecast={forecast}></ForecastCell>
        </div>
        </div> 
     );
}

export default WeatherNow;