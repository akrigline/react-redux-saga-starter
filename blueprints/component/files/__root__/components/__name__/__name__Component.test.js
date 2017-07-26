import React from 'react'
import <%= pascalEntityName %> from './<%= camelEntityName %>Component'
import {shallow} from 'enzyme'

it('should call onClick', () => {
  const onClickMock = jest.fn()
  const <%= camelEntityName %> = shallow(<<%= pascalEntityName %> onClick={onClickMock} />)
  <%= camelEntityName %>.find('button').simulate('click')
  expect(onClickMock.mock.calls.length).toBe(1)
})
