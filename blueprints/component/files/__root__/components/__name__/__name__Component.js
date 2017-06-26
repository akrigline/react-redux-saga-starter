import React from 'react'

export type Values = {
}

export type Callbacks = {
}

type Props = Values & Callbacks
export default function <%= pascalEntityName %> (props: Props) {
  return (
    <div>
      <p>Things!</p>
    </div>
  )
}
