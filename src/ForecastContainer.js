import React, { useState, useEffect } from 'react'

import DailyForecast from './DailyForecast'
import { CardGroup, Container, Row, Col } from 'react-bootstrap'

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
    //let weatherAPIStatic = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=40.71427&lon=-74.00597&cnt=${5}&appid=${LAGOMORPHA}&units=imperial`


    let weatherAPI = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&cnt=${5}&appid=${LAGOMORPHA}&units=imperial`

    
    useEffect(() => {
        const fetchData = () => {
            
            if (lat && lng) {
                //console.log(forecastCall)
                return fetch(weatherAPI)
                .then((res) => res.json())
                .then((response) => setWeatherData(response))
            }
        }
        
        fetchData()
     }, [weatherAPI, lat, lng]);
    
     console.log(weatherData)
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xl={2}></Col>
                    <Col xl={6}><h1>Five Day Forecast for {weatherData?.city.name}, {weatherData?.city.country}</h1></Col>
                    <Col xl={2}></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xl={8}>
                    <CardGroup>
                        {weatherData?.list.map((data, index) => 
                            <> 
                                <DailyForecast 
                                    dateTime={data.dt}
                                    highTemp={Math.round(data.temp.max)}
                                    lowTemp={Math.round(data.temp.min)}
                                    weatherGraphic={data.weather[0].icon}
                                    graphicAltText={data.weather[0].description}
                                    condition={data.weather[0].main}
                                    unique={`${data.dt*.24}-${index}`}
                                />
                                <br></br>
                            </>
                        )}
                    </CardGroup>      
                        
                    </Col>
                    <Col></Col>
            
                </Row>


            </Container>
        </>
    )
}

