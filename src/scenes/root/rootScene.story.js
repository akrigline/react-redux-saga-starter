import React from 'react'
import { storiesOf } from '@storybook/react'
import Root from './rootScene'
storiesOf('Root Scene', module)
  .add('should Render', () => (
    <Root />
  ))
