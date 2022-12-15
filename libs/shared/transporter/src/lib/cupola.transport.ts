import { APIRoutes, CupolaTransporter } from "./types";
import { AxiosInstance, AxiosResponse } from "axios";

import {
  ACreateTeamMemberDto,
  fakeUUIDV4,
} from "@cupola/types";
import qs from "qs";

export class CupolaAPITransport implements CupolaTransporter {
  host: string;
  constructor(
    readonly getHost: () => string,
    readonly http: AxiosInstance,
    readonly apiRoutes: APIRoutes
  ) {
    this.host = getHost();
  }

  teamMember = {
    create: (body: ACreateTeamMemberDto): Promise<AxiosResponse> => {
      const uuid = fakeUUIDV4();

      return new Promise<AxiosResponse>((resolve) =>
        resolve({
          data: { id: uuid, ...body },
          status: 201,
          statusText: "Created",
          headers: {
            ContentLocation: `/team-members/${uuid}`,
          },
          config: {},
        })
      );
    },
  };
}
