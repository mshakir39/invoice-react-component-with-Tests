import { Transporter } from "./types";
import { CupolaAPITransport } from "./cupola.transport";
import { HttpInstance } from "./http";
import { apiRoutes } from "./routes";
import { AxiosInstance, AxiosRequestConfig } from "axios";

// Now you can mock HttpInstance to and return fake data from API even before that API is developed.
export const initTransport = (
  host: () => string = () => "",
  config?: AxiosRequestConfig,
  http: AxiosInstance = HttpInstance.make(config)
): Transporter => {
  return {
    cupola: new CupolaAPITransport(host, http, apiRoutes),
  };
};
