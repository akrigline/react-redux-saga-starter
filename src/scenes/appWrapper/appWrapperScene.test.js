import React from 'react';
import {shallow} from 'enzyme'
import AppWrapper from './AppWrapperScene';

it('renders without crashing', () => {
  const appWrapperScene = shallow(<AppWrapper />)
  expect(appWrapperScene.length).toBe(1)
});
