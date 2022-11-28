import { Transporter } from "./types";
import { JuneAPITransport } from "./june.transport";
import { HttpInstance } from "./http";
import { apiRoutes } from "./routes";
import { AxiosInstance } from "axios";

// Now you can mock HttpInstance to and return fake data from API even before that API is developed.
export const initTransport = (
  host: () => string = () => "",
  http: AxiosInstance = HttpInstance.make()
): Transporter => {
  return {
    june: new JuneAPITransport(host, http, apiRoutes),
  };
};
