import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import createReduxStore from '../../redux/store'
import HomePage from './homePageRoute'

const reduxStore = createReduxStore()

const provider = storyFn =>
  <Provider store={reduxStore}>
    {storyFn()}
  </Provider>

storiesOf('Homepage', module)
  .addDecorator(provider)
  .add('should Render', () => <HomePage />)
