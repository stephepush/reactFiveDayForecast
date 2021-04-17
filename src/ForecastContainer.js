import React, { useState, useEffect } from 'react'

import DailyForecast from './DailyForecast'
import { CardGroup, Container, Row, Col, Spinner } from 'react-bootstrap'

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



    
    useEffect(() => {


        const fetchData = async () => {
            let weatherAPI = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&cnt=${5}&appid=${LAGOMORPHA}&units=imperial`

            if (lat && lng) {
                //console.log(forecastCall)
                await fetch(weatherAPI)
                .then((res) => res.json())
                .then((response) => {
                    setWeatherData(response)
                    console.log(response)
                })
            }
        }
        
        fetchData()
     }, [lat, lng, LAGOMORPHA]);
    
     console.log(status)
     console.log(weatherData)
    return (
        <>
            
            <Container fluid>
                <br /><br />
                <Row>
                    <Col xl={2}></Col>
                    {(weatherData != null) ? 
                    (<Col xl={6}><h1>Five Day Forecast for {weatherData?.city.name}, {weatherData?.city.country}:</h1></Col> ) : (
                        <div>
                            <Spinner xl={6} animation="border" role="status">
                                
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <p>{status}</p>
                        </div>

                    )}
                    <Col xl={2}></Col>
                </Row>
                <br />
                
                <br />
                <br />

                
        
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

