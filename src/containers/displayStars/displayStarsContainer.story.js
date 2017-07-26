import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import createReduxStore from '../../redux/store'
import DisplayStars from './displayStarsContainer'

storiesOf('DisplayStarsContainer', module).add('with stars', () => {
  const reduxStore = createReduxStore()
  return (
    <Provider store={reduxStore}>
      <DisplayStars />
    </Provider>
  )
})
