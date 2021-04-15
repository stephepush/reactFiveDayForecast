import React from 'react'
import DateTimeDisplay from './DateTimeDisplay';

export default function DailyForecast(props) {

    let date = new Date(props.dateTime * 1000)
    let dayOfWeek = date.toLocaleString("en-US", {weekday: "long"})
    
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
