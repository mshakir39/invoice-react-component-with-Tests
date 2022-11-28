import { AxiosInstance, AxiosResponse } from "axios";
export interface Transporter {
  june: CupolaTransporter;
}

export interface CupolaTransporter {
  http: AxiosInstance;
  host: string;
  apiRoutes: APIRoutes;
  loadChoices: () => Promise<AxiosResponse>;
}

export interface APIRoutes {
  logout: string;
}
