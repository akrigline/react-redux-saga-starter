import watchBasic, {actionCreators as basicActions} from './basic/basicSaga'

export const actions = {
  basicActions
}
export default function * rootSaga () {
  yield [
    watchBasic()
  ]
}
