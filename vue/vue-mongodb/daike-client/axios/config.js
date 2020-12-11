export default {
  method: 'post',
  baseURL: 'http://localost:3000',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  },
  data: {},
  timeOut: 10000,
  withCredentials: false, // 携带凭证
  responseType: 'json'
}