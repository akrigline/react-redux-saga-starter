import React from 'react'
import { storiesOf } from '@storybook/react'
import createReduxStore from '../../redux/store'
import Root from './rootScene'

const reduxStore = createReduxStore()

storiesOf('Root Scene', module)
  .add('should Render', () => (
    <Root store={reduxStore}/>
  ))
