import React from 'react'

export type Values = {
  starCount: number
}

export type Callbacks = {
  increment: (number) => any,
  decrement: (number) => any,
  fetchBasic: () => any
}

type Props = Values & Callbacks

export default function DisplayStars (props: Props) {
  return (
    <div>
      <p>{props.starCount} Things!</p>
      <button onClick={() => props.increment(4)}>Increase</button>
      <button onClick={() => props.decrement(4)}>Increase</button>
    </div>
  )
}
