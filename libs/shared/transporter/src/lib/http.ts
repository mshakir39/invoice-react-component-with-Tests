import axios, { AxiosInstance } from "axios";

export class HttpInstance {
  static axiosInstance: AxiosInstance;
  static make = (): AxiosInstance => {
    if (HttpInstance.axiosInstance) {
      return HttpInstance.axiosInstance;
    }
    HttpInstance.axiosInstance = axios.create({
      withCredentials: true,
    });
    return HttpInstance.axiosInstance;
  };
}
