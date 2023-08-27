/*import React, {useState, useEffect} from 'react';
import { getRemainingStamp} from './TimerUtilities'

const defaultRemainingTime = {
    seconds: '',
    minutes: '',
    hours: ''
}

export const Timer = ({countdownTimestampMs}) => {
const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

useEffect(() => {
  const IntervalId = setInterval(() => {
    updateRemainingTime(countdownTimestampMs)
  }, 1000)
  return () => clearInterval(IntervalId)
},[countdownTimestampMs])

function updateRemainingTime(countdown) {
console.log('Time Up')
}

  return (
    <div className="timer">
        <span>{remainingTime.hours}</span>
        <span>hrs</span>
        <span>{remainingTime.minutes}</span>
        <span>mins</span>
        <span>{remainingTime.seconds}</span>
        <span>s</span>
        </div> 
  )
} */
