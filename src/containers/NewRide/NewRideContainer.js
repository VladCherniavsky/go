import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import moment from 'moment';
import MainTripCriteriaForm from '../../components/MainTripCriteriaForm';
import withPriceAndSeatsCount from '../../components/HOC/withPriceAndSeatsCount';
import BaseMainCriteria from '../shared/BaseMainCriteria';
import styles from './styles';

const ExtendMainTripCriteriaFrorm = withPriceAndSeatsCount(MainTripCriteriaForm);

class NewRideContainer extends BaseMainCriteria {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      price: null,
      seatsCount: null,
      showTimePicker: false
    };
  }

  onChangeText = (data) => {
    this.setState(data);
  };
  onSelectDate = (dates) => {
    this.setState({
      dates: dates,
      showTimePicker: true
    });
  };
  onSelectTime = (time) => {
    this.setState({
      showTimePicker: false,
      selectedTime: time
    });
  };

  getDepartureDateTime = () => {
    let departureDateTime;
    const {dates, selectedTime} = this.state;
    const {formattedDate} = dates;
    if (formattedDate) {
      departureDateTime = formattedDate;
    }

    if (selectedTime) {
      const time = moment(selectedTime).format('HH:mm');
      console.log('time', time);
      departureDateTime = `${departureDateTime}, ${time}`;
    }

    return departureDateTime;
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={'padding'}
        enabled={true}>

        <ExtendMainTripCriteriaFrorm
          price={this.state.price}
          seatsCount={this.state.seatsCount}
          onChangeText={this.onChangeText}
          departurePlace={this.state.departurePlace}
          arrivalPlace={this.state.arrivalPlace}
          formattedDate={this.getDepartureDateTime()}
          onSelectDate={this.onSelectDate}
          onSelectPlace={this.onSelectPlace}
          onSelectTime={this.onSelectTime}
          showTimePicker={this.state.showTimePicker}/>

      </KeyboardAvoidingView>
    );
  }
}

export default NewRideContainer;
