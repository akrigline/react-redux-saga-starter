import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import DisplayStars from '../../components/displayStars/displayStarsComponent'
import {actions} from '../../redux/sagas/'

// Global State
export function mapStateToProps (state, props) {
  return {
    starCount: state.basicReducer.count
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping = {
  fetchBasic: actions.basicActions.fetchBasic
}

// If you want to use the function mapping
// export const propsMapping = (dispatch, ownProps) => {
//   return {
//     onClick: () => dispatch(actions.starsActions.FETCH_STARS)
//   }
// }

export default compose(
  connect(mapStateToProps, propsMapping),
  lifecycle({
    componentDidMount: function() {
      if (this.props.fetchBasic) {
        this.props.fetchBasic()
      }
    }
  })
)(DisplayStars)

