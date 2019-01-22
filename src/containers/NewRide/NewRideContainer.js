import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import MainTripCriteriaForm from '../../components/MainTripCriteriaForm';
import withPriceAndSeatsCount from '../../components/HOC/withPriceAndSeatsCount';
import BaseClass from '../shared/BaseMainCretirea';

const ExtendMainTripCriteriaFrorm = withPriceAndSeatsCount(MainTripCriteriaForm);

class NewRide extends BaseClass {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      price: null,
      seatsCount: null
    };
  }

  onChangeText = (data) => {
    this.setState(data);
  };


  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center'}}
        behavior="padding" enabled>
        <ExtendMainTripCriteriaFrorm
          price={this.state.price}
          seatsCount={this.state.seatsCount}
          onChangeText={this.onChangeText}
          departurePlace={this.state.departurePlace}
          arrivalPlace={this.state.arrivalPlace}
          formattedDate={this.state.dates.formattedDate}
          onSelectDate={this.onSelectDate}
          onSelectPlace={this.onSelectPlace}/>
      </KeyboardAvoidingView>
    );
  }
}

export default NewRide;
