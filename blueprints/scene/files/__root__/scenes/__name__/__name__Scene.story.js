import React from 'react'
import { storiesOf } from '@storybook/react'
import <%= pascalEntityName %> from './<%= camelEntityName %>Scene'
storiesOf('<%= pascalEntityName %> Scene', module)
  .add('should Render', () => (
    <<%= pascalEntityName %> />
  ))
