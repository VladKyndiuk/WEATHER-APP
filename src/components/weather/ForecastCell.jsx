import CustomIcon from "../../icons/CustomIcon";
function ForecastCell({dayNumber,forecast}) {
    return ( 

        <div className='todaysWeatherCell'>
            <div className='todaysWeatherCellInner'>
              <div className='time'> {
              
              ("00" + forecast.list[dayNumber].dt_txt.toDate("yyyy-mm-dd hh:ii:ss").getHours()).slice(-2) + ":" +
              ("00" + forecast.list[dayNumber].dt_txt.toDate("yyyy-mm-dd hh:ii:ss").getMinutes()).slice(-2)  
              } </div>
              <CustomIcon fill="white" width={65} imageTag={forecast.list[dayNumber].weather[0].icon}></CustomIcon>
              <div className='temperatureInCell'> {`${
                Math.round(forecast.list[dayNumber].main.temp)}°`}  </div>
            </div>
          </div>

     );
}

export default ForecastCell;