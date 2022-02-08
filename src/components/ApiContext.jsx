/* eslint-disable import/prefer-default-export */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react'

const ApiContext = createContext({
  scheduleInfo: {
    id: '',
    title: '',
    schedules: [],
    images: {
      logo: 'https://www.shareicon.net/data/512x512/2015/09/30/109354_media_512x512.png',
    },
  },
})

// eslint-disable-next-line react/prop-types
export const FetchScheduleInfo = ({ children }) => {
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
    <ApiContext.Provider value={scheduleInfo}>
      { children }
    </ApiContext.Provider>
  )
}

export const returnAPIContext = () => {
  const context = useContext(ApiContext)
  if (!context) return 'There is not context'
  return context
}
