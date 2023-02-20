import moment from 'moment-jalaali'
import React, { useEffect, useState } from 'react'

const weekDay = [
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنج شنبه',
    'جمعه',
    'شنبه',
]

const yearMonth = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
]

function PersianDate() {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {
        let m = moment()
        let finalDate = `${weekDay[m.day()]} ${m.jDate()} ${yearMonth[m.jMonth()]} ماه ${m.jYear()}`
        setDate(finalDate)
        // setTime(m.format("jYYYY/jM/jD ساعت HH:mm"))
        setTime(m.format(" ساعت HH:mm"))

    }, [])

  return (
    <>
        <span className="d-block">{date}</span>
        <span className="d-block">{time}</span>
    </>
  )
}

export default PersianDate