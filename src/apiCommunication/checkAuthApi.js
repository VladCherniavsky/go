import httpClient from '../services/httpClient';
import {AUTH_CHECK} from '../constants/endpoints';

export const checkAuth = (data) => {
  return httpClient.get(AUTH_CHECK, data);
};
