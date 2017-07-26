import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import createReduxStore from '../../redux/store'
import AppWrapper from './appWrapperComponent'

const reduxStore = createReduxStore()

const provider = storyFn =>
  <Provider store={reduxStore}>
    {storyFn()}
  </Provider>

storiesOf('App Wrapper', module)
  .addDecorator(provider)
  .add('should Render', () => <AppWrapper />)
