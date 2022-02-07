import React from 'react'
import './hours.scss'

const Hours = () => {
  // Schedule hours will be every 30 minutes
  const getScheduleHours = () => {
    const hours = []
    for (let i = 0; i < 24; i += 1) {
      hours.push(`${i}:00`)
      hours.push(`${i}:30`)
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
