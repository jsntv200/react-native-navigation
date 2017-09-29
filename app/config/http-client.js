import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

const handleRequest = config => {
  const data = decamelizeKeys(config.data);
  const params = decamelizeKeys(config.params);
  return { ...config, data, params };
};

const handleResponse = response => {
  const data = response.config.skipCamelize
    ? response.data
    : camelizeKeys(response.data);
  const pagination = getPagination(response);

  return { ...response, data, pagination };
};

const handleReject = error => {
  if (/40(1|3)/.test(error)) {
    console.log('Will need to find a way to handle rejected responses.');
    console.log(
      'Possibly through https://github.com/svrcekmichal/redux-axios-middleware.'
    );
  }

  return Promise.reject(error);
};

const getPagination = ({ config, headers = {} }) => {
  const pagination = headers['x-pagination'];
  const { page } = config.params || 1;

  if (pagination) {
    return { ...camelizeKeys(JSON.parse(pagination)), page };
  }
};

const httpClient = axios.create({
  baseURL: 'https://dev-api.12wbt.com',
  withCredentials: true,
});

httpClient.interceptors.request.use(handleRequest);
httpClient.interceptors.response.use(handleResponse, handleReject);

export default httpClient;
