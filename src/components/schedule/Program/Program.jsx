import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './program.scss'

const Program = ({ programInfo }) => {
  const [miliseconds, setMiliseconds] = useState(0)

  // Function to convert miliseconds to hours format
  // eslint-disable-next-line no-unused-vars
  const convertMsToHM = (duration) => {
    let seconds = Math.floor((duration / 1000) % 60)
    let minutes = Math.floor((duration / (1000 * 60)) % 60)
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? `0${hours}` : hours
    minutes = (minutes < 10) ? `0${minutes}` : minutes
    seconds = (seconds < 10) ? `0${seconds}` : seconds

    return `${hours}:${minutes}:${seconds}`
  }

  // Function to substract the dates
  const substractDates = (endTime, startTime) => Math.abs(new Date(endTime) - new Date(startTime))

  useEffect(() => {
    setMiliseconds(substractDates(programInfo.end, programInfo.start))
  }, [])

  // Function to get program width
  const getProgramLength = (duration) => {
    const minutes = duration / 60000
    return {
      width: `${minutes * 5 - 2}px`,
      maxWidth: `${minutes * 5 - 2}px`,
    }
  }

  return (
    <div className="program" style={getProgramLength(miliseconds)}>
      {/* <h1>{convertMsToHM(miliseconds)}</h1> */}
      <h1>{programInfo.title}</h1>
      <h2>{new Date(programInfo.start).toLocaleTimeString()}</h2>
    </div>
  )
}

Program.propTypes = {
  programInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  }).isRequired,
}

export default Program
