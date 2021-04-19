import React from 'react'
import {Helmet} from "react-helmet"

export default function HelmetContainer(props) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.location === null ? `Five Day Forecast` : `Five Day Forecast in ${props.location}`}</title>

            </Helmet>
        </div>
    )
}
