/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Program from './Program'
import Hours from '../Hours/Hours'

const Programs = ({ scheduleInfo, setRef }) => {
  const completeSchedule = React.createRef()
  const [actualTime, setActualTime] = useState(0)
  const [userInteraction, setUserInteraction] = useState(false)

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
    // Move scroll to actual minute
    completeSchedule.current.scrollLeft = actualMinute
  }

  const goNow = () => {
    // Move to actual time
    setUserInteraction(false)
    scrollRef(actualTime)
  }

  const goNext = () => {
    // Move 30 min to the right
    setUserInteraction(true)
    completeSchedule.current.scrollLeft += 152
  }

  const goBack = () => {
    // Move 30 min to the left
    setUserInteraction(true)
    completeSchedule.current.scrollLeft -= 152
  }

  useEffect(() => {
    // Update the scrollbar when the current time changes and user is not interacting
    if (!userInteraction) scrollRef(actualTime)
  }, [actualTime])

  useEffect(() => {
    if (completeSchedule.current) {
      setRef(completeSchedule.current)
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
    <div className="right-column">

      <button className="left-arrow" onClick={() => goBack()} type="button">
        <img src="https://img.icons8.com/nolan/64/circled-chevron-left--v3.png" alt="left-arrow" />
      </button>

      <div className="programs" ref={completeSchedule}>
        <div className="time-line" style={{ left: `${actualTime * 5.067}` }} />

        <Hours />
        <div className="programs-list">
          { scheduleInfo?.map((channel) => (
            <div className="programs-horizontal">
              { channel.schedules.map((element) => (
                <Program key={channel.id + element.start} programInfo={element} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <button className="right-arrow" onClick={() => goNext()} type="button">
        <img src="https://img.icons8.com/nolan/64/circled-chevron-right--v3.png" alt="right-arrow" />
      </button>

      {
        userInteraction
          ? (
            <button className="watch-now" onClick={() => goNow()} type="button">
              <img src="https://img.icons8.com/external-bearicons-gradient-bearicons/64/000000/external-Now-miscellany-texts-and-badges-bearicons-gradient-bearicons.png" alt="Watch Now" />
            </button>
          )
          : ''
      }
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
  setRef: PropTypes.func,
}

Programs.defaultProps = {
  setRef: () => {},
}

export default Programs
