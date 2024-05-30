import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard'
import './Cityweather.css'
import Cards from './Cards'

const api_key = process.env.REACT_APP_WEATHER_API_KEY
let api = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=`

export default function CityWeather() {

    let [inputValue, setInputValue] = useState('')
    let [weatherData, setWeatherData] = useState({
        temperature: '',
        humidity: '',
        condition: '',
        windSpeed: ''
    })
    let [loading, setLoading] = useState(false)
    let [showCards, setShowCards] = useState(false)

    let handleInputChange = (e) => {
        setLoading(false)
        setShowCards(false)
        let val = e.target.value
        setInputValue(val)
    }

    let handleSearch = async () => {
        setLoading(true)
        setShowCards(false)
        let city = inputValue
        let cityUrl = api + `${city}`
        try{
            let res = await fetch(cityUrl)
            let data = await res.json()
            
            if(data && data.current){
                setWeatherData({
                    temperature: data.current.temp_c,
                    humidity: data.current.humidity,
                    condition: data.current.condition.text,
                    windSpeed: data.current.wind_kph
                })
                setLoading(false)
                setShowCards(true)
            }else if(data.error){
                setLoading(false)
                // settimeout to delay alert once update gets done and loading removed
                setTimeout(() => {
                    alert("Failed to fetch weather data")
                }, 0)
                
            }
        }catch(err){
            alert("Failed to fetch weather data")
            console.log(err)
        }
    }


  return (
    <div className="container">
    <div className="search-box">
        <input type="text" value={inputValue} onChange={(e) => handleInputChange(e)} />
        <button type="search" onClick={handleSearch}>Search</button>
    { loading ? <p>Loading data...</p> : ''}
    
    </div>
        { showCards ? <Cards data={weatherData} /> : ''}
    </div>
    
  )
}
