import {getBasic} from './BasicSaga'
import { call } from 'redux-saga/effects'
import axios from 'axios'

it('should call the api', () => {
  const iterator = getBasic()
  expect(iterator.next().value).toEqual(call(axios.get, 'https://api.github.com/repos/ericwooley/react-native-redux-jest-starter-kit'))
})
