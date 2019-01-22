import React from 'react';
import {
  View
} from 'react-native';
import Button from '../../components/Button';
import MainTripCriteriaForm from '../../components/MainTripCriteriaForm';
import BaseClass from '../shared/BaseMainCretirea';
import styles from './styles';

export default class SearchContainerl extends BaseClass {
  static navigationOptions = {
    header: null,
  };


  onPressButton = () => {
    console.log('this.state', this.state);
  };

  render() {
    return (
      <View style={styles.container}>

        <MainTripCriteriaForm
          departurePlace={this.state.departurePlace}
          arrivalPlace={this.state.arrivalPlace}
          formattedDate={this.state.dates.formattedDate}
          onSelectDate={this.onSelectDate}
          onSelectPlace={this.onSelectPlace}/>

        <Button
          onPressHandler={this.onPressButton}
          style={styles.searchButton}
          render={this.renderLabel('Search')} />
      </View>
    );
  }
}
