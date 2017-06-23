import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../redux/store'
import <%= pascalEntityName %> from './<%= camelEntityName %>Container'

const reduxStore = createReduxStore('<%= pascalEntityName %> story store', {counter: {count: 7}})

const provider = (storyFn) => (
  <Provider store={reduxStore}>
    { storyFn() }
  </Provider>
)

storiesOf('<%= pascalEntityName %>Container', module)
  .addDecorator(provider)
  .add('with 7 stars', () => {
    return (
        <<%= pascalEntityName %> />
    )
  })
