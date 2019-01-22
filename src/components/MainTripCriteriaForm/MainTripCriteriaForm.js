import React from 'react';
import {View, ListView, TouchableOpacity, Text, TextInput} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {debounce} from 'lodash';
import InputWithLabel from '../InputWithLabel';
import ModalScreen from '../Modal';
import ModalHeader from '../Modal/ModalHeader';
import Button from '../Button';
import Geocoder from '../../services/Geocoder';

import styles from './styles';

class MainTripCriteriaForm extends React.Component {
  constructor(props) {
    super(props);
    this.modalScreenRef = React.createRef();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.onChangeTextDebounced = debounce(this.onChangeText, 1000);

    this.state = {
      activeInputElement: 'From',
      placesPredictions: this.ds.cloneWithRows([]),
      selectedDate: null
    };
  }

  onChangeText = (text) => {
    Geocoder.getSuggestions(text).then((res) => {
      this.setState({
        placesPredictions: this.ds.cloneWithRows(res.data.predictions)
      });
    }).catch((err) => {
      // eslint-disable-next-line
      console.log('err', err);
    });
  };

  onPressInput = (element) => {
    return () => {
      element === 'When'
        ? this.renderContent = this.renderCalendar
        : this.renderContent = this.renderSearchView;
      this.setState({
        activeInputElement: element,
        shouldDisplayHeader: element === 'When'
      }, () => {
        this.modalScreenRef.current.open();
      });
    };
  };

  renderCalendar = () => (
    <CalendarList
      onDayPress={(day) => {
        const dates = {
          selectedDate: day.dateString,
          formattedDate: (new Date(day.dateString)).toDateString()
        };
        this.props.onSelectDate(dates);
        this.modalScreenRef.current.close();
      }}
      markedDates={{
        [this.state.selectedDate]: {selected: true, marked: true, selectedColor: 'blue'}
      }}
    />);

  renderSearchView = () => (
    <ListView
      keyboardShouldPersistTaps={'always'}
      dataSource={this.state.placesPredictions}
      renderRow={this.renderListRow}
      renderSeparator={this.renderSeparator}
      renderHeader={this.renderListViewHeader}/>
  );

  renderListRow = (row) => {
    return (
      <TouchableOpacity
        style={styles.listRaw}
        onPress={this.selectPlace(row)}>
        <Text>{row.description}</Text>
      </TouchableOpacity>
    );
  };

  renderSeparator = (sectionId, rowId) => (
    <View key={rowId} style={styles.separator} />
  );

  selectPlace = (place) => () => {
    const {activeInputElement} = this.state;
    const dataToSave = {
      [activeInputElement === 'From'
        ? 'departurePlace'
        : 'arrivalPlace']: place
    };

    this.props.onSelectPlace(dataToSave);

    this.setState({
      placesPredictions: this.ds.cloneWithRows([])
    });

    this.modalScreenRef.current.close();
  };

  renderListViewHeader = () => {
    return (
      <ModalHeader
        renderHeaderContent={this.renderModalHeaderContent}
        headerContentStyle={styles.placePredictionListHeaderContent}
        rightPartStyle={styles.placePredictionListHeaderRightPart}
        renderRightPart={() => (
          <Button
            onPressHandler={this.modalScreenRef.current.close}
            render={this.renderLabel('Cancel')}/>
        )}
      />
    );
  };

  renderModalHeaderContent = () => {
    return (
      <TextInput
        autoFocus={true}
        style={{flex: 1}}
        onChangeText={this.onChangeTextDebounced}
        placeholder={this.state.activeInputElement}/>
    );
  };

  renderLabel = (label) => () => (
    <Text>{label}</Text>
  );

  renderCalendarHeader = () => {
    return (
      <ModalHeader
        renderLeftPart={()=>(null)}
        renderHeaderContent={this.renderDatePickerHeaderContent}
        renderRightPart={() => (
          <Button
            onPressHandler={this.modalScreenRef.current.close}
            render={this.renderLabel('Cancel')}/>
        )}
      />
    );
  };

  renderDatePickerHeaderContent = () => {
    return (
      <View style={styles.datePickerHeaderContent}>
        <Text>When will you go?</Text>
      </View>
    );
  };


  render() {
    const {departurePlace, arrivalPlace} = this.props;
    const departurePlaceToDisplay = departurePlace && departurePlace.structured_formatting.main_text;
    const arrivalPlaceToDisplay = arrivalPlace && arrivalPlace.structured_formatting.main_text;

    return (
      <View style={styles.container}>
        <InputWithLabel
          label={'From:'}
          placeholder={'From'}
          onPress={this.onPressInput('From')}
          style={styles.element}
          labelStyle={styles.label}
          value={departurePlaceToDisplay}
          touchableStyle={styles.touchableStyle}
          textStyle={styles.textInputStyle}/>

        <InputWithLabel
          label={'To:'}
          placeholder={'To'}
          onPress={this.onPressInput('To')}
          style={styles.element}
          labelStyle={styles.label}
          value={arrivalPlaceToDisplay}
          touchableStyle={styles.touchableStyle}
          textStyle={styles.textInputStyle}/>

        <InputWithLabel
          label={'When:'}
          placeholder={'When'}
          onPress={this.onPressInput('When')}
          value={this.props.formattedDate}
          style={styles.element}
          labelStyle={styles.label}
          touchableStyle={styles.touchableStyle}
          textStyle={styles.textInputStyle}/>

        <ModalScreen
          renderHeader={this.state.shouldDisplayHeader && this.renderCalendarHeader}
          renderContent={this.renderContent}
          modalVisible={this.state.modalWindowVisible}
          ref={this.modalScreenRef}/>
      </View>

    );
  }
}

export default MainTripCriteriaForm;
