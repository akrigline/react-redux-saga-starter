import React from 'react'
import PropTypes from 'prop-types'

export default function DisplayStars (props) {
  return (
    <div>
      <p>{props.starCount} Things!</p>
    </div>
  )
}

DisplayStars.propTypes = {
  starCount: PropTypes.number
}
