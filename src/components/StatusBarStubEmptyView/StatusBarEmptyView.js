import React from 'react';
import {View, Platform} from 'react-native';
import {Constants} from 'expo';

const statusBarEmptyView = () => {
  return (
    Platform.OS === 'ios' ?
      <View style={{height: Constants.statusBarHeight}} />
      : null
  );
};

export default statusBarEmptyView;
