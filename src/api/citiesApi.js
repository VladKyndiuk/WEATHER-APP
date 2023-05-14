export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_CITIES_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
export const API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'

export const API_WEATHER_URL = 'https://api.openweathermap.org/data/2.5'



