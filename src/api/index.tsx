import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// 定义请求响应的数据类型
interface ResponseData<T> {
  code: number;
  message: string;
  data: T;
}

// 创建 Axios 实例
const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config: any) => {
    // 在请求发送前做些什么
    return config;
  },
  (error: any) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 在响应被处理前做些什么
    return response;
  },
  (error: any) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

// 封装 GET 请求方法
export function get<T>(url: string, params?: any): Promise<ResponseData<T>> {
  return instance
    .get(url, { params })
    .then((response: AxiosResponse<ResponseData<T>>) => response.data)
    .catch((error) => Promise.reject(error));
}

// 封装 POST 请求方法
export function post<T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ResponseData<T>> {
  return instance
    .post(url, data, config)
    .then((response: AxiosResponse<ResponseData<T>>) => response.data)
    .catch((error: any) => Promise.reject(error));
}


// import { get, post } from './api';

// // GET 请求
// get<User[]>('/users', { page: 1 })
//   .then((response) => {
//     const users = response.data;
//     console.log(users);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // POST 请求
// const newUser = { name: 'Alice', email: 'alice@example.com' };
// post<User>('/users', newUser)
//   .then((response) => {
//     const user = response.data;
//     console.log(user);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
