/* eslint-disable no-param-reassign */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Channel from './Channel'
import './channel.scss'

const Channels = ({ scheduleInfo, programsRef }) => {
  const channelsList = React.useRef()
  const [actualChannel, setActualChannel] = useState(1)

  const goNext = () => {
    // Showing 5 channels on screen
    // If user clicks down arrow, move channels and schedule
    if (actualChannel <= scheduleInfo.length - 5) {
      setActualChannel(actualChannel + 1)
      channelsList.current.scrollTop += 80
      programsRef.children[2].scrollTop += 80
    } else {
      setActualChannel(1)
      channelsList.current.scrollTop = 0
      programsRef.children[2].scrollTop = 0
    }
  }

  const goPrev = () => {
    // Showing 5 channels on screen
    // If user clicks up arrow, move channels and schedule
    if (actualChannel > 1) {
      setActualChannel(actualChannel - 1)
      channelsList.current.scrollTop -= 80
      programsRef.children[2].scrollTop -= 80
    } else {
      setActualChannel(scheduleInfo.length - 5)
      channelsList.current.scrollTop = (scheduleInfo.length - 5) * 80
      programsRef.children[2].scrollTop = (scheduleInfo.length - 5) * 80
    }
  }

  return (
    <div className="left-column">
      <button className="up-arrow" onClick={() => goPrev()} type="button">
        <img src="https://img.icons8.com/nolan/64/circled-chevron-up--v3.png" alt="up-arrow" />
      </button>

      <div className="channels-list" ref={channelsList}>
        {
        scheduleInfo?.map((channel) => (
          <Channel key={channel.id} channelIcon={channel?.images?.logo} channelId={channel?.id} />
        ))
      }
      </div>

      <button className="down-arrow" onClick={() => goNext()} type="button">
        <img src="https://img.icons8.com/nolan/64/circled-chevron-down--v3.png" alt="down-arrow" />
      </button>
    </div>
  )
}

Channels.propTypes = {
  scheduleInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      images: PropTypes.shape({
        logo: PropTypes.string,
      }),
    }),
  ),
  programsRef: PropTypes.instanceOf(Element),
}

Channels.defaultProps = {
  scheduleInfo: {
    images: {
      logo: 'https://www.shareicon.net/data/512x512/2015/09/30/109354_media_512x512.png',
    },
  },
  programsRef: document.getElementById('programs-list'),
}

export default Channels
