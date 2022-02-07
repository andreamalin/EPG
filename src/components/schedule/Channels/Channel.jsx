import React from 'react'
import PropTypes from 'prop-types'
import './channel.scss'

const Channel = ({ channelIcon }) => (
  <div className="channel" style={{ backgroundImage: `url(${channelIcon})` }} />
)

Channel.propTypes = {
  channelIcon: PropTypes.string,
}

Channel.defaultProps = {
  channelIcon: 'https://www.shareicon.net/data/512x512/2015/09/30/109354_media_512x512.png',
}

export default Channel
