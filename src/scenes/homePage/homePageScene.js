import React from 'react'
import SmartDisplayStars from '../../containers/displayStars/displayStarsContainer'

class HomePageScene extends React.Component {
  render () {
    return (
      
        <div>
          <h1>This is the Homepage</h1>
          <SmartDisplayStars />
        </div>

    )
  }
  props: {

  }
}
export default HomePageScene
