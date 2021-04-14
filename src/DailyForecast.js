import React from 'react'

export default function DailyForecast(props) {
    return (
        <div>
            High:{props.highTemp}
            <br></br>
            Low:{props.lowTemp}
        </div>
    )
}
