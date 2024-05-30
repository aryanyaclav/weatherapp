import React from 'react'
import './WeatherCard.css'

export default function WeatherCard({parameter, value}) {
  return (
    <div className="weather-card">
        <h2>{parameter}</h2>
        <div className="value-param">{value}</div>
    </div>
  )
}
