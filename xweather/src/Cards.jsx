import React from 'react'
import WeatherCard from './WeatherCard'
import './Cards.css'

export default function Cards({data}) {
    let {temperature, humidity, condition, windSpeed} = data
  return (
    <div className="weather-cards">
        <WeatherCard parameter="temperature" value={temperature} />
        <WeatherCard parameter="Humidity" value={humidity} />
        <WeatherCard parameter="Condition" value={condition} />
        <WeatherCard parameter="Wind speed" value={windSpeed}  />
    </div>
  )
}
