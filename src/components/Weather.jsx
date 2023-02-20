import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherInfo } from '../redux/weatherSlice'
import PersianDate from './PersianDate'

function Weather() {

  const {loading , data , error} = useSelector(state=>state.weather)
  const dispatch = useDispatch()

  const [backMode , setBackMode] = useState('usual')
  const [cityName , setCityName] = useState('')

  const handleGetWeather = (e) => {
    e.preventDefault()
     dispatch(getWeatherInfo(cityName))
     setCityName('')
  }

  useEffect(() => {
    if (!data.main) {
      return
    }
    let temp = data.main.temp - 273.15
    if (temp < 12) {
      setBackMode('cold')
    } else if (temp < 23) {
      setBackMode('usual')
    } else {
      setBackMode('warm')
    }
  }, [data])

  return (
    <div className={`app container-fluid pt-4 back_${backMode}`}>
      <div className="row justify-content-center">

        <div className="col-10 py-3 pt-4">
          <form onSubmit={handleGetWeather}>
            <input type="text" placeholder={data.name || 'نام شهر یا کشور'} className="search_input w-100" value={cityName} onChange={(e) => setCityName(e.target.value)}/>
          </form>
        </div>

        <div className="col-11 py-3 pt-4">
          <h3 className="text-center">
            <PersianDate/>
          </h3>
        </div>

        {loading ? (

          <div className="text-center text-secondary mt-5">
            <div className="spinner-border"></div>
              <span className="d-block">Loading</span>
          </div>
        ) : data.main ? (
          <>
            <div className="col-9 py-3 pt-4">
              <div className="temprature_box">
                <h3 className="text-center">
                  <span>{Math.round(data.main.temp - 273.15)}</span> °C
                </h3>
              </div>
            </div>

            <div className="col-11 py-3 pt-4">
              <h1 className="text-center">{data.weather[0].main}</h1>
            </div>
          </>
          ) : error ? (
            <h3 className="text-center mt-5">نام شهر یا کشور را به درستی وارد کنید</h3>
          ) : (
            <h3 className="text-center mt-5">مکان مورد نظر را وارد کنید</h3>
          )}

      </div>
    </div>
  )
}

export default Weather