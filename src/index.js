import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Root from './routes/root/rootRoute'
import registerServiceWorker from './registerServiceWorker'
import './style/main.scss'
import createReduxStore from './redux/store'
import { AppContainer } from 'react-hot-loader'

const store = createReduxStore()

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./routes/root/rootRoute', () => {
    // render(Root)
    render(require('./routes/root/rootRoute').default)
  })
}

registerServiceWorker()
