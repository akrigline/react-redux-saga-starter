import React from 'react'
import DisplayStars from './displayStarsComponent'
import {shallow} from 'enzyme'
it('should call onClick', () => {
  const onPressMock = jest.fn()
  const displayStars = shallow(<DisplayStars onPress={onPressMock} />)
  displayStars.find('Button').simulate('press')
  expect(onPressMock.mock.calls.length).toBe(1)
})
