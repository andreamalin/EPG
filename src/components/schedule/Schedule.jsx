import React, { useState } from 'react'
import { FetchScheduleInfo } from '../ApiContext'
import Channels from './Channels/Channels'
import Programs from './Program/Programs'
import './schedule.scss'

const Schedule = () => {
  const [programsRef, setRef] = useState()

  return (
    <FetchScheduleInfo>
      <div className="schedule">
        <Channels programsRef={programsRef} />
        <Programs setRef={setRef} />
      </div>
    </FetchScheduleInfo>
  )
}

export default Schedule
