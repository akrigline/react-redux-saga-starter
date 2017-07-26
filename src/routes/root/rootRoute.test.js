import React from 'react'
import RootRoute from './rootRoute'
import { shallow } from 'enzyme'
import createReduxStore from '../../redux/store'

it('should render', () => {
  const store = createReduxStore()
  const rootRoute = shallow(<RootRoute store={store} />)
  expect(rootRoute.length).toBe(1)
})

// You could use something like this to test onClick handlers
// it('should call trigger stars naviation', () => {
//   const starsButtonMock = jest.fn()
//   const appScene = shallow(<Root navigation={{navigate: starsButtonMock}} />)
//   const starsButton = appScene.find('.stars-button')
//   starsButton.simulate('press')
//   expect(starsButtonMock.mock.calls.length).toBe(1)
// })

// it('should call trigger dev-panel naviation', () => {
//   const starsButtonMock = jest.fn()
//   const appScene = shallow(<Root navigation={{navigate: starsButtonMock}} />)
//   const starsButton = appScene.find('.dev-panel-button')
//   starsButton.simulate('press')
//   expect(starsButtonMock.mock.calls.length).toBe(1)
// })
