/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Program from './Program'
import Hours from '../Hours/Hours'

const Programs = ({ scheduleInfo }) => {
  const completeSchedule = React.createRef()
  const [actualTime, setActualTime] = useState(0)

  const getCurrentMinute = () => {
    // get complete date
    const currentDate = new Date()
    // get current date
    const actualDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
    // rest the day from the actual time
    const currentTime = Math.abs(new Date(actualDate) - currentDate)
    // get the time of the user on minutes
    return Math.floor(currentTime / 60000)
  }

  const scrollRef = (actualMinute) => {
    // every minute are 5 pixels
    completeSchedule.current.scrollTo(actualMinute * 5, 0)
  }

  useEffect(() => {
    // Update the scrollbar when the current time changes
    scrollRef(actualTime)
  }, [actualTime])

  useEffect(() => {
    if (completeSchedule.current) {
      // Get current time on minutes
      let actualMinute = getCurrentMinute()
      setActualTime(actualMinute)

      // Update timeline every minute
      setInterval(() => {
        if (actualMinute >= 1440) {
          // If it is 00:00:01, get timeline back to 0
          actualMinute = 0
        } else {
          // Else continue addding one minute on the timeline
          actualMinute += 1
        }
        setActualTime(actualMinute)
      }, 60 * 1000)
    }
  }, [])

  return (
    <div className="programs-list" ref={completeSchedule}>
      <div className="time-line" style={{ left: `${actualTime * 5.067}` }} />
      <Hours />
      { scheduleInfo?.map((channel) => (
        <div className="programs-horizontal">
          { channel.schedules.map((element) => (
            <Program key={channel.id + element.start} programInfo={element} />
          ))}
        </div>
      ))}
    </div>
  )
}

Programs.propTypes = {
  scheduleInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      schedules: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          start: PropTypes.string.isRequired,
          end: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
}

export default Programs
