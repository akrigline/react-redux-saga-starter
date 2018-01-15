import React from 'react'
import PropTypes from 'prop-types'
import styles from './displayStarsComponent.scss'

export default function DisplayStars (props) {
  return (
    <div>
      <p>
        {props.starCount} Things!
      </p>
      <button className={styles.button} onClick={() => props.increment(4)}>
        Increase
      </button>
      <button className={styles.button} onClick={() => props.decrement(4)}>
        Decrease
      </button>
    </div>
  )
}

DisplayStars.propTypes = {
  starCount: PropTypes.string,
  increment: PropTypes.func,
  decrement: PropTypes.func
}
