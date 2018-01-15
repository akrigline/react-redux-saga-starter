import {connect} from 'react-redux'
// For Lifecycle composing
// import {compose, lifecycle} from 'recompose'
import {actions as sagaActions} from '../../redux/sagas/'
import {actionCreators} from '../../redux/reducers/basicReducer/basicReducerReducer'

// Global State
export function mapStateToProps (state, props) {
  return {
    starCount: state.counter.count
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping = {
  onClick: sagaActions.starsActions.FETCH_STARS
}

// If you want to use the function mapping
// export const propsMapping = (dispatch, ownProps) => {
//   return {
//     onClick: () => dispatch(actions.starsActions.FETCH_STARS)
//   }
// }

export default connect(mapStateToProps, propsMapping)(<%= pascalEntityName %>)

// export default compose(
//   connect(mapStateToProps, propsMapping),
//   lifecycle({
//     componentDidMount: function() {
//       if (this.props.fetchBasic) {
//         this.props.fetchBasic()
//       }
//     }
//   })
// )(<%= pascalEntityName %>)
