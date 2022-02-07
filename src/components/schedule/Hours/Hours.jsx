import React from 'react'
import './hours.scss'

const Hours = () => {
  // Schedule hours will be every 30 minutes
  const getScheduleHours = () => {
    const hours = []
    for (let i = 0; i < 24; i += 1) {
      // starting the schedule on 0:30
      hours.push(`${i}:30`)
      // if it is 24, then go back to 00:00, else continue adding one hour
      if (i + 1 === 24) hours.push('00:00'); else hours.push(`${i + 1}:00`)
    }
    return hours
  }

  return (
    <div className="hours">
      {getScheduleHours().map((hour) => (
        <h1 key={hour}>{hour}</h1>
      ))}
    </div>
  )
}

export default Hours
