import React from 'react'

export default function DailyForecast(props) {
    return (
        <div>
            {props.highTemp}
            {props.lowTemp}
        </div>
    )
}
