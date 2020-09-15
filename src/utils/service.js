import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000, // request timeout
  validateStatus(status) {
    return status >= 200 && status < 500;
  }
});

// request interceptor
service.interceptors.request.use(
  config => {
    // 默认使用 get 请求
    if (!config.method) {
      config.method = "get";
    }
    config.method = config.method.toLowerCase();

    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data.code === 200) {
      return response.data;
    }
  },
  error => {
    // for debug
    console.log(error);
    return Promise.reject(error);
  }
);

export function post(url, data = {}, params = {}) {
  return service({
    method: "post",
    url,
    data,
    params
  });
}

export function get(url, params = {}) {
  return service({
    method: "get",
    url,
    params
  });
}

export function put(url, data = {}, params = {}) {
  return service({
    method: "put",
    url,
    params,
    data
  });
}

export function del(url, params = {}) {
  return service({
    method: "delete",
    url,
    params
  });
}

export default service;
