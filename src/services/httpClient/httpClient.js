import axios from 'axios';
import StoreSingletone from '../../store';

class HttpService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;

    this.service = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      withCredentials: true
    });

    this.storeAndPersistor = new StoreSingletone();
    this.service.interceptors.request.use(this.requestInterceptor.bind(this));
  }

  request({method, url, data}) {
    return this.service.request({
      method,
      url,
      responseType: 'json',
      data
    })
        .then(({data}) => data);
  }

  get(resource, params={}) {
    return this.service
        .get(resource, {
          responseType: 'json',
          params
        })
        .then(({data}) => data);
  }

  post(url, data) {
    return this.request({
      method: 'post',
      url,
      data
    });
  }

  put(url, data) {
    return this.request({
      method: 'put',
      url,
      data
    });
  }

  delete(url, data) {
    return this.request({
      method: 'delete',
      url,
      data
    });
  }

  requestInterceptor(config) {
    const store = this.storeAndPersistor.store;
    if (store) {
      const authState = store.getState().auth;
      const token = authState.token;
      token ? config.headers['x-access-token'] = token : null;
    }
    return config;
  }
}

const httpClient = new HttpService('http://10.6.24.44:3000');

export default httpClient;
