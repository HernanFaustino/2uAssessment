import axios from 'axios';
import has from 'lodash.has';
import qs from 'qs';
import { notification } from 'antd';

const fetchClient = () => {
  const defaultOptions = {
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
      'Content-Type': 'application/json',
    },
    paramsSerializer: params => {
      return qs.stringify(params);
    },
  };

  let instance = axios.create(defaultOptions);
  return instance;
};

export function showApiError (error) {
  if (has(error, 'data')) {
    let description = '';
    if (has(error.data, 'non_field_errors')) {
      description = error.data.non_field_errors.join('. ');
    } else if (error.status === 500) {
      description = 'Hubo un problema. Intente de nuevo más tarde.';
    } else {
      let description = JSON.stringify(error.data, null, 2);
      if (description.length > 100) {
        description = `${description.substr(0, 97)}...`;
      }
    }
    notification.error({ message: 'Error', description });
  }
}

export default fetchClient();
