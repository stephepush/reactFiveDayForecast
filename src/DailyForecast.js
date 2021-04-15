import React from 'react'
import DateTimeDisplay from './DateTimeDisplay';

export default function DailyForecast(props) {

    let newDate = new Date(props.dateTime*1000)
    let dateTimeFormat = new Intl.DateTimeFormat("en-US", {weekday: "long"}, {month: "long"}, {day: "numeric"})
    
    let dayOfWeek = dateTimeFormat.format(newDate)

    return (
        <div key={props.index}>
    
            {dayOfWeek}
            <br></br>
            High: {props.highTemp}
            <br></br>
            <img 
                src={`http://openweathermap.org/img/wn/${props.weatherGraphic}@2x.png`}
                alt={props.graphicAltText}/>
            <br></br>
            
            Low: {props.lowTemp}
        </div>
    )
}
