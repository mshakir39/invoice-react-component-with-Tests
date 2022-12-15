import { AxiosInstance, AxiosResponse } from "axios";
import {
  ACreateTeamMemberDto,
} from "@cupola/types";

export interface Transporter {
  cupola: CupolaTransporter;
}

export interface CupolaTransporter {
  http: AxiosInstance;
  host: string;
  apiRoutes: APIRoutes;
  teamMember: {
    create: (body: ACreateTeamMemberDto) => Promise<AxiosResponse>;
  };
}

export interface APIRoutes {
  teamMember: { create: string };
}
