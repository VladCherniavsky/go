import {get} from 'axios';

class Geocoder {
  constructor(fetch, apiKey) {
    this.fetch = fetch;
    this.apiKey = apiKey;
    this.directionApiKey = 'AIzaSyBqG4dcyUi9AhyWQs2KTolnDulbEilwiHA';
    this.baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
    this.directionUrl = 'https://maps.googleapis.com/maps/api/directions/json?';
    this.autocompleteUtl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
  }

  geocodePosition(position) {
    const {lat, lng} = position;
    return this.fetch(`${this.baseUrl}latlng=${lat},${lng}&key=${this.apiKey}`);
  }

  geocodeAddress(address) {
    return this.fetch(`${this.baseUrl}address=${this.formarAddress(address)}&key=${this.apiKey}`);
  }

  getDirections(origin, destination) {
    return this.fetch(`${this.directionUrl}origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&alternatives=true&key=${this.directionApiKey}`);
  }

  getSuggestions(address) {
    return this.fetch(`${this.autocompleteUtl}input=${encodeURI(address)}&key=${this.apiKey}&types=(regions)&language=en`);
  }

  formarAddress(address) {
    return address.split(' ').join('+');
  }
}

export default new Geocoder(get, 'AIzaSyCX1wkvxZ5RmyAOdSKS88JWrJD2vXZnqaU');
