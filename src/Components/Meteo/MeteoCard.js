import React, { useEffect, useState } from 'react'
import orderDays from '../../usingTools/timeHow'
import MeteoDetail from './MeteoDetail/MeteoDetail'

export default function MeteoCard() {
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")
    const [weather, setWeather] = useState("")
    // const [maxTemp, setMaxTemp] = useState("")
    // const [icon, setIcon] = useState("")




    const callApiWeather = (lat, lng) => {
        const weatherApi = process.env.REACT_APP_CLE_API
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&units=metric&lang=fr&appid=${weatherApi}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setWeather(data)
                // setMaxTemp(data.daily[0].temp.max)
                // setIcon(`http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}.png`)
            })
    }
    const geoloc = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                const crd = pos.coords;
                setLat(crd.latitude)
                setLng(crd.longitude)

            }, () => {
                alert('Veuillez accepter la géolocalisation')
            })
        }


    }
    console.log("orderDay", orderDays);
    console.log("weather", weather.daily);
    let dailyWeather = weather.daily
    console.log("dailyQWeather", dailyWeather);

    useEffect(() => {
        geoloc()
        callApiWeather(lat, lng)
    }, [lat, lng])

    return (
        <div>dailyWeather={dailyWeather}
            <MeteoDetail
                dailyWeather={dailyWeather}
                orderDays={orderDays}
            />
        </div>
    )
}


