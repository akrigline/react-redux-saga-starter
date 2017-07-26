import React, { Component } from 'react'
import logo from '../../assets/icons/logo.svg'
import styles from './appWrapperComponent.scss'

class AppWrapper extends Component {
  render () {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        {this.props.children}
      </div>
    )
  }

  props: {
    children: any
  }
}

export default AppWrapper
