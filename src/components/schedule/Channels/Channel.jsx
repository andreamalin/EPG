/* eslint-disable no-param-reassign */
import React from 'react'
import PropTypes from 'prop-types'
import './channel.scss'

const Channel = ({ channelIcon, channelId }) => (
  <img
    className="channel"
    src={`url(${channelIcon})`}
    onError={({ currentTarget }) => {
      currentTarget.onerror = null // prevents looping
      currentTarget.src = `https://ui-avatars.com/api/?name=${channelId}`
    }}
    alt="channel-icon"
  />
)

Channel.propTypes = {
  channelIcon: PropTypes.string,
  channelId: PropTypes.string.isRequired,
}

Channel.defaultProps = {
  channelIcon: 'https://www.shareicon.net/data/512x512/2015/09/30/109354_media_512x512.png',
}

export default Channel
