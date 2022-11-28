import { APIRoutes, CupolaTransporter } from "./types";
import { AxiosInstance, AxiosResponse } from "axios";

export class JuneAPITransport implements CupolaTransporter {
  host: string;
  constructor(
    readonly getHost: () => string,
    readonly http: AxiosInstance,
    readonly apiRoutes: APIRoutes
  ) {
    this.host = getHost();
  }

  loadChoices = async (): Promise<AxiosResponse> => {
    return this.http.get(`${this.host}/${this.apiRoutes.logout}`);
  };

}
