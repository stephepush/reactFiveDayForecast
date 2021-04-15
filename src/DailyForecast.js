import React from 'react'
import Card from 'react-bootstrap/Card'

export default function DailyForecast(props) {

    let cardDate = new Date(props.dateTime*1000)
    let dateTimeFormat = new Intl.DateTimeFormat("en-US", {weekday: "long", month: "long", day: "numeric"})

    
    let dayOfWeek = dateTimeFormat.format(cardDate)

    return (
        <Card 
            style={{ width: '18rem' }}
            key={props.index}
        >
            <Card.Body>
                <Card.Title>
                    {dayOfWeek}
                </Card.Title>
            </Card.Body>
            
            <br></br>
            High: {props.highTemp}
            <br></br>
            <img 
                src={`http://openweathermap.org/img/wn/${props.weatherGraphic}@2x.png`}
                alt={props.graphicAltText}/>
            <br></br>
            
            Low: {props.lowTemp}
        </Card>
    )
}
