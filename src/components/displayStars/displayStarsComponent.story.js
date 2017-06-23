import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import DisplayStars from './displayStarsComponent'
storiesOf('DisplayStars', module)
  .add('with text', () => (
    <DisplayStars>
      Hello World
    </DisplayStars>
  ))
