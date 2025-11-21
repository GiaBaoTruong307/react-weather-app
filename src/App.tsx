import { useState } from 'react'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import video from './video.mp4'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

  const fetchWeather = async (city: string) => {
    setLoading(true)
    setError('')
    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`
      const response = await axios.get(url)
      console.log(response.data)
      setWeather(response.data)
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        setError('City not found. Please try again.')
      } else {
        setError('An error occurred. Please try again later.')
      }
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-blue-100">
      <video className="absolute left-0 top-0 h-full w-full object-cover" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag
      </video>
      <div className="z-1 absolute left-0 top-0 h-full w-full bg-black/20"></div>
      <div className="z-10 w-full max-w-md rounded-lg bg-black/70 p-8 text-white shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">Weather App</h1>
        <SearchBar fetchWeather={fetchWeather} />
        {loading && <p className="mt-4 text-center">Loading...</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  )
}

export default App
