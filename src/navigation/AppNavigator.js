import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import LoginContainer from '../containers/Login';

import MainTabNavigator from './MainTabNavigator';

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: {
    screen: LoginContainer
  },
  Main: MainTabNavigator,

}, {
  initialRouteName: 'Main'
});

const App = createAppContainer(switchNavigator);
export default App;

