import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import HomePage from './homePageScene'
storiesOf('App Scene', module)
  .add('should Render', () => (
    <HomePage />
  ))
