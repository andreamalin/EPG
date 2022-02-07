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

    // eslint-disable-next-line no-console
    setScheduleInfo(json.channels)
    // eslint-disable-next-line no-console
    json.channels.map((item) => console.log(item))
    // eslint-disable-next-line no-console
    console.log(json.channels)
  }

  useEffect(() => {
    // eslint-disable-next-line no-console
    fetchInfo()
  }, [])

  return (
    <div className="schedule">
      <Channels scheduleInfo={scheduleInfo} />

      <div className="right-column">
        <div className="left-arrow" />
        <Programs scheduleInfo={scheduleInfo} />
        <div className="right-arrow" />
      </div>
    </div>
  )
}

export default Schedule
