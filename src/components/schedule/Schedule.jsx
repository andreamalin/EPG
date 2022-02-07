import React, { useEffect, useState } from 'react'
import Channels from './Channels/Channels'
import Programs from './Program/Programs'
import './schedule.scss'

const Schedule = () => {
  const [scheduleInfo, setScheduleInfo] = useState([])

  const fetchInfo = async () => {
    const json = await fetch('http://localhost:1337/epg', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())

    setScheduleInfo(json.channels)
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  return (
    <div className="schedule">
      <Channels scheduleInfo={scheduleInfo} />

      <div className="right-column">

        <button className="left-arrow" onClick={() => {}} type="button">
          <img src="https://img.icons8.com/nolan/64/circled-chevron-left--v3.png" alt="left-arrow" />
        </button>
        <Programs scheduleInfo={scheduleInfo} />

        <button className="right-arrow" onClick={() => {}} type="button">
          <img src="https://img.icons8.com/nolan/64/circled-chevron-right--v3.png" alt="right-arrow" />
        </button>
      </div>
    </div>
  )
}

export default Schedule
