import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import LoginContainer from '../containers/Login';

import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: {
    screen: LoginContainer
  },
  Main: MainTabNavigator,

}, {
  initialRouteName: 'Main'
});
