import React from 'react'
import Card from 'react-bootstrap/Card'

export default function DailyForecast(props) {

    let cardDate = new Date(props.dateTime*1000)
    let dateTimeFormat = new Intl.DateTimeFormat("en-US", {weekday: "long", month: "numeric", day: "numeric"})

    
    let dayOfWeek = dateTimeFormat.format(cardDate)

    return (
        <Card 
            
            key={props.unique}
        >
            <Card.Body>
                <Card.Title>
                    <h2>{dayOfWeek}</h2>
                </Card.Title>
            </Card.Body>
            <Card.Img 
                src={`https://openweathermap.org/img/wn/${props.weatherGraphic}@2x.png`}
                alt={props.graphicAltText}
                style={{width:'110px'}}
            />
            <Card.Body><h3>{props.condition}</h3></Card.Body>
            
            <Card.Body>High: {props.highTemp} <br></br> Low: {props.lowTemp}</Card.Body>
        </Card>
    )
}
