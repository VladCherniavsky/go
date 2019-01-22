import React from 'react';
import {Text} from 'react-native';

export default class BaseClass extends React.Component {
  state = {
    departurePlace: null,
    arrivalPlace: null,
    dates: {
      selectedDate: null,
      formattedDate: null
    }
  };

  renderLabel = (label) => () => (
    <Text>{label}</Text>
  );

  onSelectDate = (dates) => {
    this.setState({
      dates: dates
    });
  };

  onSelectPlace = (data) => {
    this.setState(data);
  };

  render() {
    return (null);
  }
}
