import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import Root from './rootScene'
storiesOf('App Scene', module)
  .add('should Render', () => (
    <Root />
  ))
