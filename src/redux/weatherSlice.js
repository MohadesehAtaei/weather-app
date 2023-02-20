import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        loading: false,
        data: [],
        error: ''
    },
    reducers: {
        sendWeatherRequest: (state) => {
            return {...state , loading: true}
        },
        receiveWeatherResponse: (state , action) => {
            return { ...state , loading: false , data: action.payload , error: ''}
        },
        receiveWeatherError: (state , action) => {
            return { ...state , loading: false , data: [] , error: action.payload}
        }
    }
})

export const getWeatherInfo = (cityName) => {
    return (dispatch , getState) => {
        dispatch(sendWeatherRequest())
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ebc69e0b227ac82a02d490bea8e06483`).then(res=>{
            dispatch(receiveWeatherResponse(res.data))
        }).catch(error=>{
            dispatch(receiveWeatherError(error.message))
        })
    }
}

export const { sendWeatherRequest , receiveWeatherResponse , receiveWeatherError } = weatherSlice.actions

export default weatherSlice.reducer