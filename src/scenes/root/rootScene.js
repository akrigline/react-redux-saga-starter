import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import routes from '../../routes';
import AppWrapper from '../appWrapper/appWrapperScene';
import HomePage from '../homePage/homePageScene';


export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppWrapper>
            <Switch>
              <Route path='/' component={HomePage} />
              
            </Switch>
          </AppWrapper>
        </BrowserRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};