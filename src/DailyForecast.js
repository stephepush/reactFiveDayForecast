import React from 'react'

export default function DailyForecast(props) {

    
    return (
        <div key={props.index}>
            
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
