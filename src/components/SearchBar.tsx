import { useState, type FormEvent } from 'react'

interface Props {
  fetchWeather: (city: string) => void
}

const SearchBar = ({ fetchWeather }: Props) => {
  const [city, setCity] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (city.trim()) {
      fetchWeather(city)
      setCity('')
    }
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        className="flex-1 rounded-l-lg border border-r-0 border-gray-300 bg-transparent p-2 outline-none"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="cursor-pointer rounded-r-lg border border-l-0 bg-blue-500 p-2 hover:bg-blue-600"
        type="submit"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
