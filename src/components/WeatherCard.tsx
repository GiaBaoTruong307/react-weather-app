interface Props {
  weather: any
}

const WeatherCard = ({ weather }: Props) => {
  const getEmoji = (icon: string) => {
    switch (icon) {
      case '01d':
        return '☀️'
      case '01n':
        return '🌙'
      case '02d':
        return '🌤️'
      case '02n':
        return '☁️🌙'
      case '03d':
      case '03n':
        return '☁️'
      case '04d':
      case '04n':
        return '☁️☁️'
      case '09d':
      case '09n':
        return '🌧️🌧️'
      case '10d':
        return '🌦️'
      case '10n':
        return '🌧️🌙'
      case '11d':
      case '11n':
        return '⛈️'
      case '13d':
      case '13n':
        return '❄️❄️'
      case '50d':
      case '50n':
        return '🌫️'
      default:
        return '☀️'
    }
  }

  return (
    <div className="mt-6">
      <h2 className="text-center text-2xl font-semibold">
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="mt-4 flex items-center justify-center">
        <div className="m-2 flex select-none text-4xl leading-none">
          {getEmoji(weather.weather[0].icon)}
          <p className="ml-3 text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
        </div>
      </div>
      <p className="text-center capitalize text-gray-400">{weather.weather[0].description}</p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-gray-400">Humidity</p>
          <p>{weather.main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Wind</p>
          <p className="font-bold">{weather.wind.speed} m/s</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Pressure</p>
          <p className="font-bold">{weather.main.pressure} hPa</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Feels like</p>
          <p className="font-bold">{Math.round(weather.main.feels_like)} °C</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
