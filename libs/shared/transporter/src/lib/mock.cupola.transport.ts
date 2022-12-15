/* eslint-disable @typescript-eslint/no-unused-vars */
import { APIRoutes, CupolaTransporter, Transporter } from "./types";
import { apiRoutes } from "./routes";
import {
  ACreateTeamMemberDto,
} from "@cupola/types";
import { AxiosInstance, AxiosResponse } from "axios";

export class MockCupolaTransport implements CupolaTransporter {
  http: AxiosInstance = undefined as unknown as AxiosInstance;
  host: string = undefined as unknown as string;
  apiRoutes: APIRoutes = apiRoutes;

  teamMember = {
    create: (_: ACreateTeamMemberDto): Promise<AxiosResponse> => {
      throw new Error("not implemented");
    },
  };
}

export const initMockTransport = (): Transporter => {
  return {
    cupola: new MockCupolaTransport(),
  };
};
