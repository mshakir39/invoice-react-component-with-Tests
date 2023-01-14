import { DateTime } from "luxon";
import { APIRoutes, CupolaTransporter, INotes, ITimeEntry } from "./types";
import { AxiosInstance, AxiosResponse } from "axios";

import { ACreateTeamMemberDto, fakeUUIDV4 } from "@cupola/types";
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
  timesheet = {
    // getURL: "/timesheet?start_date=2022-01-30&end_date=2022-02-15",
    get: (startDate: string, endDate: string) => {
      return new Promise<AxiosResponse>((resolve) =>
        resolve({
          data: {
            Project1: {
              Overhead: [
                {
                  date: "2022-12-19",
                  hours: 2,
                  minutes: 0,
                  notes: "check timesheet",
                },
                {
                  date: "2022-12-20",
                  hours: 1,
                  minutes: 0,
                  notes: "fill time",
                },
                {
                  date: "2022-12-21",
                  hours: 0,
                  minutes: 30,
                  notes: "",
                },
                {
                  date: "2022-12-22",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-23",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-24",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-25",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
              ],
              "Pre Design": [
                {
                  date: "2022-12-19",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-20",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-21",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-22",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-23",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-24",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-25",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
              ],
              "Schematic Design": [
                {
                  date: "2022-12-19",
                  hours: 0,
                  minutes: 30,
                  notes: "",
                },
                {
                  date: "2022-12-20",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-21",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-22",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-23",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-24",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-25",
                  hours: 0,
                  minutes: 30,
                  notes: "",
                },
              ],
              "Add a Phase": [
                {
                  date: "2022-12-19",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-20",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-21",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-22",
                  hours: 0,
                  minutes: 30,
                  notes: "",
                },
                {
                  date: "2022-12-23",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-24",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-25",
                  hours: 0,
                  minutes: 30,
                  notes: "",
                },
              ],
            },
            Project2: {
              Overhead: [
                {
                  date: "2022-12-19",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-20",
                  hours: 1,
                  minutes: 30,
                  notes: "",
                },
                {
                  date: "2022-12-21",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-22",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-23",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-24",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-25",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
              ],
              "Pre Design": [
                {
                  date: "2022-12-19",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-20",
                  hours: 1,
                  minutes: 30,
                  notes: "",
                },
                {
                  date: "2022-12-21",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-22",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-23",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-24",
                  hours: 0,
                  minutes: 30,
                  notes: "",
                },
                {
                  date: "2022-12-25",
                  hours: 3,
                  minutes: 0,
                  notes: "",
                },
              ],
              "Schematic Design": [
                {
                  date: "2022-12-19",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-20",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-21",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-22",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-23",
                  hours: 1,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-24",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
                {
                  date: "2022-12-25",
                  hours: 0,
                  minutes: 0,
                  notes: "",
                },
              ],
            },
          },
          status: 200,
          statusText: "OK",
          headers: {
            ContentLocation: `/timesheet}`,
          },
          config: {},
        })
      );
    },
    updateTimesheet: (body: ITimeEntry) => {
      return new Promise<AxiosResponse>((resolve) =>
        resolve({
          data: {
            ...body,
            date: DateTime.fromISO(
              new Date(body.date.toString()).toISOString()
            ).toFormat("yyyy-MM-dd"),
          },
          status: 201,
          statusText: "OK",
          headers: {
            ContentLocation: `/timesheet}`,
          },
          config: {},
        })
      );
    },
    updateNotes: (body: INotes) => {
      return new Promise<AxiosResponse>((resolve) =>
        resolve({
          data: {
            ...body,
            date: DateTime.fromISO(
              new Date(body.date.toString()).toISOString()
            ).toFormat("yyyy-MM-dd"),
          },
          status: 201,
          statusText: "OK",
          headers: {
            ContentLocation: `/timesheet}`,
          },
          config: {},
        })
      );
    },
  };
}
