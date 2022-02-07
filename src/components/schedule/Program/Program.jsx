/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './program.scss'

const Program = ({ programInfo, actualProgram }) => {
  const [miliseconds, setMiliseconds] = useState(0)

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
      backgroundColor: actualProgram ? '#db9328' : '#52057B',
    }
  }

  return (
    <>
      <div className="program" style={getProgramLength(miliseconds)}>
        <h1>{programInfo.title}</h1>
        <h2>{new Date(programInfo.start).toLocaleTimeString()}</h2>
      </div>
    </>
  )
}

Program.propTypes = {
  programInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  }).isRequired,
  actualProgram: PropTypes.bool,
}

Program.defaultProps = {
  actualProgram: false,
}

export default Program
