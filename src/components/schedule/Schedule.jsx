import React, { useEffect, useState } from 'react'
import Channels from './Channels/Channels'
import Programs from './Program/Programs'
import './schedule.scss'

const Schedule = () => {
  const [programsRef, setRef] = useState()
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
      <Channels scheduleInfo={scheduleInfo} programsRef={programsRef} />
      <Programs scheduleInfo={scheduleInfo} setRef={setRef} />
    </div>
  )
}

export default Schedule
