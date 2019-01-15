import React from 'react';
import {
  Text,
  View,
  TextInput,
  ListView,
  TouchableOpacity
} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {debounce} from 'lodash';
import Button from '../../components/Button';
import styles from './styles';
import ModalScreen from '../../components/Modal';
import InputWithLabel from '../../components/InputWithLabel';
import Geocoder from '../../services/Geocoder';
import ModalHeader from '../../components/Modal/ModalHeader';

export default class SearchContainerl extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.modalScreenRef = React.createRef();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      activeInputElement: 'From',
      placesPredictions: this.ds.cloneWithRows([]),
      selectedDate: null
    };

    this.onChangeTextDebounced = debounce(this.onChangeText, 1000);
  }

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

  renderLabel = (label) => () => (
    <Text>{label}</Text>
  );

  renderModalContent = () => (null);

  renderSearchView = () => (
    <ListView
      enableEmptySections={false}
      keyboardShouldPersistTaps={'always'}
      dataSource={this.state.placesPredictions}
      renderRow={this.renderListRow}
      renderSeparator={this.renderSeparator}
      renderHeader={this.renderListViewHeader}/>
  );

  renderCalendar = () => (
    <CalendarList
      onDayPress={(day) => {
        this.setState({
          selectedDate: day.dateString,
          formattedDate: (new Date(day.dateString)).toDateString()
        });
        this.modalScreenRef.current.close();
      }}
      markedDates={{
        [this.state.selectedDate]: {selected: true, marked: true, selectedColor: 'blue'}
      }}
    />);

  renderListRow = (row) => {
    return (
      <TouchableOpacity
        style={styles.listRaw}
        onPress={this.selectPlace(row)}>
        <Text>{row.description}</Text>
      </TouchableOpacity>
    );
  };

  selectPlace = (place) => () => {
    const {activeInputElement} = this.state;
    this.setState({
      [activeInputElement === 'From'
        ? 'departurePlace'
        : 'arrivalPlace']: place.structured_formatting.main_text
    }, () => {
      this.setState({
        placesPredictions: this.ds.cloneWithRows([])
      });
    });

    this.modalScreenRef.current.close();
  };

  renderSeparator = (sectionId, rowId) => (
    <View key={rowId} style={styles.separator} />
  );

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
      <View style={{width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>When will you go?</Text>
      </View>
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


  render() {
    const fromPressHandler = this.onPressInput('From');
    return (
      <View style={styles.container}>

        <InputWithLabel
          label={'From:'}
          placeholder={'From'}
          onPress={fromPressHandler}
          style={styles.element}
          labelStyle={styles.label}
          value={this.state.departurePlace}
          touchableStyle={styles.touchableStyle}
          textStyle={styles.textInputStyle}/>

        <InputWithLabel
          label={'To:'}
          placeholder={'To'}
          onPress={this.onPressInput('To')}
          style={styles.element}
          labelStyle={styles.label}
          value={this.state.arrivalPlace}
          touchableStyle={styles.touchableStyle}
          textStyle={styles.textInputStyle}/>

        <InputWithLabel
          label={'When:'}
          placeholder={'When'}
          onPress={this.onPressInput('When')}
          value={this.state.formattedDate}
          style={styles.element}
          labelStyle={styles.label}
          touchableStyle={styles.touchableStyle}
          textStyle={styles.textInputStyle}/>

        <Button
          onPressHandler={this.onClickDatePicker}
          style={styles.searchButton}
          render={this.renderLabel('Search')} />

        <ModalScreen
          renderHeader={this.state.shouldDisplayHeader && this.renderCalendarHeader}
          renderContent={this.renderContent}
          modalVisible={this.state.modalWindowVisible}
          ref={this.modalScreenRef}/>
      </View>
    );
  }
}
