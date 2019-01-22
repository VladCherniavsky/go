import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import LoginContainer from '../containers/Login';
import AuthenticationContainer from '../containers/Authentication';

import MainTabNavigator from './MainTabNavigator';

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: LoginContainer,
  Main: MainTabNavigator,
  Authentication: AuthenticationContainer

}, {
  initialRouteName: 'Authentication'
});

const App = createAppContainer(switchNavigator);
export default App;

