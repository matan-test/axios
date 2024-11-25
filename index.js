import axios from './lib/axios.js';

// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const auth0_secret = 'JMGQpeswj_Lcp2c5pCx0qCOa6ZdLk_wq8RuAizlOGKYFNC13Gl3dMJq78HNcl_hs'

const {
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = axios;

export {
  axios as default,
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
}
