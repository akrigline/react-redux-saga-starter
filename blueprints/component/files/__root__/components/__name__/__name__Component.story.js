import React from 'react'
import { storiesOf, action } from '@kadira/react-native-storybook'
import <%= pascalEntityName %> from './<%= camelEntityName %>Component'
storiesOf('<%= pascalEntityName %>', module)
  .add('with text', () => (
    <<%= pascalEntityName %>>
      Hello World
    </<%= pascalEntityName %>>
  ))
