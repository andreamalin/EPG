import React from 'react'
import PropTypes from 'prop-types'
import Channel from './Channel'
import './channel.scss'

const Channels = ({ scheduleInfo }) => (
  <div className="left-column">
    <div className="up-arrow" />
    <div className="channels-list">
      {
        // eslint-disable-next-line no-unused-vars
        scheduleInfo?.map((channel) => (
          <Channel />
        // <Channel channelIcon={channel?.images?.logo} />
        ))
      }
    </div>

    <div className="down-arrow" />
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
