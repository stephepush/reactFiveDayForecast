import React from 'react'
import Card from 'react-bootstrap/Card'

export default function DailyForecast(props) {

    let cardDate = new Date(props.dateTime*1000)
    let dateTimeFormat = new Intl.DateTimeFormat("en-US", {weekday: "long", month: "long", day: "numeric"})

    
    let dayOfWeek = dateTimeFormat.format(cardDate)

    return (
        <Card 
            
            key={props.index}
        >
            <Card.Body>
                <Card.Title>
                    {dayOfWeek}
                </Card.Title>
            </Card.Body>
            <Card.Img 
                src={`http://openweathermap.org/img/wn/${props.weatherGraphic}@2x.png`}
                alt={props.graphicAltText}
            />
            <Card.Body>{props.condition}</Card.Body>
            
            <Card.Body>High: {props.highTemp} <br></br> Low: {props.lowTemp}</Card.Body>
            <Card.Body></Card.Body>
        </Card>
    )
}
