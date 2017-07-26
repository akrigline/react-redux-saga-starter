import React from 'react'
import { shallow } from 'enzyme'
import AppWrapper from './appWrapperComponent'

it('renders without crashing', () => {
  const appWrapperComponent = shallow(<AppWrapper />)
  expect(appWrapperComponent.length).toBe(1)
})
