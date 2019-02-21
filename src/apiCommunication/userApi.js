import httpClient from '../services/httpClient';
import {USER} from '../constants/endpoints';

export const getUser = (userId) => {
  return httpClient.get(`${USER}/${userId}`);
};
