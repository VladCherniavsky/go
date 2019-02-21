import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import LoginContainer from '../containers/Login';
import AuthenticationContainer from '../containers/Authentication';

import MainTabNavigator from './MainTabNavigator';

const switchNavigator = createSwitchNavigator({
  Login: LoginContainer,
  Main: MainTabNavigator,
  Authentication: AuthenticationContainer

}, {
  initialRouteName: 'Authentication'
});

const App = createAppContainer(switchNavigator);
export default App;

