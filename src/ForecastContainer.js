import React, { useState, useEffect } from 'react'
import DailyForecast from './DailyForecast'


export default function ForecastContainer() {
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [status, setStatus] = useState(null)

    const [weatherData, setWeatherData] = useState(null)
    const LAGOMORPHA = `9371287a98cd312dba80a1bfe6d8661c`
    
    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser')
        } else {
            setStatus('Locating...')
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus('Position loaded');
                setLat(position.coords.latitude)
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    useEffect(() => {
        getLocation()
    }, [])

    let weatherAPI = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&cnt=${5}&appid=${LAGOMORPHA}&units=imperial`
        console.log(lat)
        console.log(lng)
     useEffect(() => {


         if (lat && lng) {
            //console.log(forecastCall)
            return fetch(weatherAPI)
                .then((res) => res.json())
                .then((response) => setWeatherData(response))
         }
     }, [weatherAPI]);
    
     console.log(weatherData)
    return (
        <div>
            <h1>Five Day Forecast for {weatherData?.city.name}, {weatherData?.city.country}</h1>

            {weatherData.map((data, index) => 
               <> 
                <DailyForecast 
                    highTemp={95}
                    lowTemp={87}
                />
                <br></br>
                </>
            )}
        </div>
    )
}

