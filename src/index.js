import React from 'react';
import ReactDOM from 'react-dom';
import Root from './scenes/root/rootScene'
import registerServiceWorker from './registerServiceWorker';
import './style/main.scss';
import createReduxStore from './redux/store'


const store = createReduxStore();
// const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();