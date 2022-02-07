import React from 'react'
import PropTypes from 'prop-types'
import Program from './Program'
import Hours from '../Hours/Hours'

const Programs = ({ scheduleInfo }) => (
  <div className="programs-list">
    <Hours />
    { scheduleInfo?.map((channel) => (
      <div className="programs-horizontal">
        { channel.schedules.map((element) => (
          <Program key={channel.id + element.start} programInfo={element} />
        ))}
      </div>
    ))}
  </div>
)

Programs.propTypes = {
  scheduleInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      schedules: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          start: PropTypes.string.isRequired,
          end: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
}

export default Programs
