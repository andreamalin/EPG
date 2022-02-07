import React from 'react'
import PropTypes from 'prop-types'
import Channel from './Channel'
import './channel.scss'

const Channels = ({ scheduleInfo }) => (
  <div className="left-column">

    <button className="up-arrow" onClick={() => {}} type="button">
      <img src="https://img.icons8.com/nolan/64/circled-chevron-up--v3.png" alt="up-arrow" />
    </button>

    <div className="channels-list">
      {
        // eslint-disable-next-line no-unused-vars
        scheduleInfo?.map((channel) => (
          <Channel channelIcon={channel?.images?.logo} channelId={channel?.id} />
        ))
      }
    </div>

    <button className="down-arrow" onClick={() => {}} type="button">
      <img src="https://img.icons8.com/nolan/64/circled-chevron-down--v3.png" alt="down-arrow" />
    </button>
  </div>
)

Channels.propTypes = {
  scheduleInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      images: PropTypes.shape({
        logo: PropTypes.string,
      }),
    }),
  ),
}

Channels.defaultProps = {
  scheduleInfo: {
    images: {
      logo: 'https://www.shareicon.net/data/512x512/2015/09/30/109354_media_512x512.png',
    },
  },
}

export default Channels
