import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import AppWrapper from '../appWrapper/appWrapperScene'

const AsyncHomePage = Loadable({
  loader: () => import('../homePage/homePageScene'),
  loading: () => null
})

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppWrapper>
            <Switch>
              <Route path='/' exact component={AsyncHomePage} />
              
            </Switch>
          </AppWrapper>
        </BrowserRouter>
      </Provider>
    )
  }
  props: {
    store: Object
  }
}
