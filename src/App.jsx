
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './componest/Weather'



function App() {
  
const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY ='94416acdec0fccf9422bc55df6a3273f'
  
    const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

      axios.get(URL)
      .then(({data}) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  }

  useEffect (() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])


  return (
    <main className=' min-h-screen items-center flex justify-center font-principal-font p-2'>
      
      {weatherInfo ? <Weather weatherInfo ={weatherInfo} /> : <h2>.</h2> }
      
     


    </main>
  )
}

export default App
