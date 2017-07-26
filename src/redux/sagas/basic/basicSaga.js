import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { createAction, Action } from 'redux-actions'

// Saga action strings
export const FETCH_BASIC = 'saga/Basic/FETCH_BASIC'
export const FETCH_BASIC_SUCCESS = 'saga/Basic/FETCH_BASIC_SUCCESS'
export const FETCH_BASIC_FAILURE = 'saga/Basic/FETCH_BASIC_FAILURE'

type BasicSagaActionCreators = {
  fetchBasic: () => Action<any>,
  fetchBasicSuccess: number => Action<any>,
  fetchBasicFailure: object => Action<any>
}

export const actionCreators: BasicSagaActionCreators = {
  fetchBasic: createAction(FETCH_BASIC),
  fetchBasicSuccess: createAction(FETCH_BASIC_SUCCESS),
  fetchBasicFailure: createAction(FETCH_BASIC_FAILURE)
}

export default function * watchBasic () {
  yield takeLatest(FETCH_BASIC, getBasic)
}

export function * getBasic (action) {
  try {
    const repoInfo = yield call(
      axios.get,
      'https://api.github.com/repos/akrigline/react-redux-saga-starter'
    )
    yield put(actionCreators.fetchBasicSuccess(repoInfo.data.stargazers_count))
  } catch (error) {
    yield put(actionCreators.fetchBasicFailure(error))
  }
}
