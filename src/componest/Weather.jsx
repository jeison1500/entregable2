import { useState } from "react"
import { kelvinToCelsius, kelvinToFahrenheit } from "../utilis/temp"
import axios from "axios"




const Weather = ({ weatherInfo }) => {
    const [country, setCountry] = useState(null)

    const [isCelsius, setIsCelsius] = useState(true)

    const toggleIsCelsius = () => {
        setIsCelsius(!isCelsius)
    }

  


    return (
        <section className="bg-[url('/images/imagen2.jpg')] h-screen  text-center grid gap-6" >

         

          

            <h2 className="font-bold text-3xl my-10">{weatherInfo?.name}, {weatherInfo?.sys.country}</h2>

            
            <section className="grid gap-4 p-7 sm:grid-cols-[1fr_auto]">
                {/* section arriba  */}

                <article className="bg-white/70 p-2 rounded-2xl grid grid-cols-2 items-center">
                    <h3 className="col-span-2 text-4xl capitalize">{weatherInfo?.weather[0].description}</h3>

                    <span className="text-4xl">{isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo?.main.temp)}</span>

                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                    </div>

                </article>

                {/* section abajo */}
                <section className="bg-white/70 p-2 py-6 text-lg rounded-3xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center">

                    <article className="flex gap-2 sm:items-center">
                        <div>
                            <img className="w-10 h-10" src="/images/viento.png" alt="" />
                        </div>
                        <span>{weatherInfo?.wind.speed}m/s</span>
                    </article>

                    <article className="flex gap-2 sm:items-center">
                        <div>
                            <img className="w-10 h-10" src="/images/humedad.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.humidity}%</span>
                    </article>

                    <article className="flex gap-2 sm:items-center">
                        <div>
                            <img className="w-10 h-10" src="/images/atmosferico.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.pressure}hPa</span>
                    </article>

                </section>

            </section>
            <div >
                <button className="bg-white/70  bg-blue-600 rounded-md overflow-hidden p-2" onClick={toggleIsCelsius}>  Change F / C  </button>
            </div>
        </section>
    )
}
export default Weather