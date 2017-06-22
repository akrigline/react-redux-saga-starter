import React from 'react'
import { storiesOf } from '@storybook/react'
import HomePage from './homePageScene'
storiesOf('Homepage', module)
  .add('should Render', () => (
    <HomePage />
  ))
