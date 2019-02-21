import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import PropTypes from 'prop-types';

import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import SearchContainer from '../containers/Search';
import NewRideContainer from '../containers/NewRide';
import ProfileContainer from '../containers/Profile';
import SettingsScreen from '../containers/SettingsScreen';

const SearchStack = createStackNavigator({
  Search: SearchContainer,
});
const renderSearchStackTabBarIcon =({focused}) => (
  <TabBarIcon
    focused={focused}
    name={
      Platform.OS === 'ios'
        ? 'ios-search'
        : 'md-search'
    }
  />
);


SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: renderSearchStackTabBarIcon,
};

renderSearchStackTabBarIcon.propTypes = {
  focused: PropTypes.bool
};

const NewRideStack = createStackNavigator({
  NewRide: NewRideContainer,
});

const renderNewRideTabBarIcon = ({focused}) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
  />
);

NewRideStack.navigationOptions = {
  tabBarLabel: 'Add Ride',
  tabBarIcon: renderNewRideTabBarIcon
};

renderNewRideTabBarIcon.propTypes = {
  focused: PropTypes.bool
};

const HistoryStack = createStackNavigator({
  Settings: SettingsScreen,
});

const renderHistoryTabBarIcon = ({focused}) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'logo-buffer' : 'logo-buffer'}
  />
);

HistoryStack.navigationOptions = {
  tabBarLabel: 'History',
  tabBarIcon: renderHistoryTabBarIcon
};


renderHistoryTabBarIcon.propTypes = {
  focused: PropTypes.bool
};


const ProfileStack = createStackNavigator({
  Profile: ProfileContainer,
});

const renderProfileabBarIcon = ({focused}) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
  />
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: renderProfileabBarIcon
};

renderProfileabBarIcon.propTypes = {
  focused: PropTypes.bool
};

export default createBottomTabNavigator({
  SearchStack,
  NewRideStack,
  HistoryStack,
  ProfileStack
});
