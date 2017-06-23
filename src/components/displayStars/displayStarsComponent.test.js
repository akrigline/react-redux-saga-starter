import React from 'react'
import DisplayStars from './displayStarsComponent'
import {shallow} from 'enzyme'
it('should render without stars', () => {
  const displayStars = shallow(<DisplayStars />)
  expect(displayStars.length).toBe(1)
})
it('should render with stars', () => {
  const displayStars = shallow(<DisplayStars starCount={25} />)
  expect(displayStars.length).toBe(1)
})
