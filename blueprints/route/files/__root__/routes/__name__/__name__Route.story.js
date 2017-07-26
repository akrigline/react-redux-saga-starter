import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import createReduxStore from '../../redux/store'
import <%= pascalEntityName %> from './<%= camelEntityName %>Scene'


const reduxStore = createReduxStore()

const provider = (storyFn) => (
  <Provider store={reduxStore}>
    { storyFn() }
  </Provider>
)

storiesOf('<%= pascalEntityName %> Scene', module)
  .addDecorator(provider)
  .add('should Render', () => (
    <<%= pascalEntityName %> />
  ))
