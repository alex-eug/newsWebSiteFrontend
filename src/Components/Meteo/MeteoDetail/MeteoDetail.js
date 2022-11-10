import React from 'react'

export default function MeteoDetail({ dailyWeather, orderDays }) {

    console.log("rrrrrrrrrrrrrrrr", orderDays);
    return (
        <div>
            {dailyWeather.map((elm, index) => (
                <div>
                    <p>{orderDays[index]}</p>
                    <p>{elm.weather[0].description}</p>
                    <img src={`http://openweathermap.org/img/wn/${elm.weather[0].icon}.png`} alt="" srcset="" />
                    <p>max {Math.trunc(elm.temp.max)}</p>
                    <p>min {Math.trunc(elm.temp.min)}</p>
                </div>
            ))}
        </div>
    )
}
