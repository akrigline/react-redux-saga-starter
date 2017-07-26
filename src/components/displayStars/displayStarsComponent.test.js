import React from 'react'
import DisplayStars from './displayStarsComponent'
import { shallow } from 'enzyme'
it('should render without stars', () => {
  const displayStars = shallow(<DisplayStars />)
  expect(displayStars.length).toBe(1)
})
it('should render with stars', () => {
  const displayStars = shallow(<DisplayStars starCount={25} />)
  expect(displayStars.length).toBe(1)
})
it('should call increment on an increase click', () => {
  const mockFunction = jest.fn()
  const displayStars = shallow(<DisplayStars increment={mockFunction} />)
  displayStars.find('button').at(0).simulate('click')
  expect(mockFunction.mock.calls.length).toBe(1)
})
it('should call decrement on an increase click', () => {
  const mockFunction = jest.fn()
  const displayStars = shallow(<DisplayStars decrement={mockFunction} />)
  displayStars.find('button').at(1).simulate('click')
  expect(mockFunction.mock.calls.length).toBe(1)
})
