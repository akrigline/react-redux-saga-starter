import React from 'react'
import styles from './displayStarsComponent.scss'

export type Values = {
  starCount: number
}

export type Callbacks = {
  increment: number => any,
  decrement: number => any,
  fetchBasic: () => any
}

type Props = Values & Callbacks

export default function DisplayStars (props: Props) {
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
