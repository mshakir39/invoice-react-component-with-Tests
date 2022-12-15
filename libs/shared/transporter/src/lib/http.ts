import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class HttpInstance {
  static axiosInstance: AxiosInstance;
  static make = (config?: AxiosRequestConfig): AxiosInstance => {
    if (HttpInstance.axiosInstance) {
      return HttpInstance.axiosInstance;
    }
    HttpInstance.axiosInstance = axios.create({
      withCredentials: true,
      ...config,
    });
    return HttpInstance.axiosInstance;
  };
}
