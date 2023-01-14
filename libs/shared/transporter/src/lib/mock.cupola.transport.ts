import { DateTime } from "luxon";
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  APIRoutes,
  CupolaTransporter,
  INotes,
  ITimeEntry,
  Transporter,
} from "./types";
import { apiRoutes } from "./routes";
import { ACreateTeamMemberDto } from "@cupola/types";
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
  timesheet = {
    // getURL: "/timesheet?start_date=2022-01-30&end_date=2022-02-15",
    // get: (startDate, endDate) => {
    get: (startDate: string, endDate: string) => {
      return new Promise<AxiosResponse>((resolve) =>
        resolve({
          data: {
            timeEntries: [
              {
                date: "2022-12-19",
                hours: 24,
                minutes: 30,
                notes: "Visited the client's site",
              },
              {
                date: "2022-12-20",
                hours: 24,
                minutes: 30,
                notes: "Visited the client's site",
              },
              {
                date: "2022-12-21",
                hours: 24,
                minutes: 30,
                notes: "Visited the client's site",
              },
              {
                date: "2022-12-22",
                hours: 24,
                minutes: 30,
                notes: "Visited the client's site",
              },
              {
                date: "2022-12-23",
                hours: 24,
                minutes: 30,
                notes: "Visited the client's site",
              },
              {
                date: "2022-12-24",
                hours: 24,
                minutes: 30,
                notes: "Visited the client's site",
              },
              {
                date: "2022-12-25",
                hours: 24,
                minutes: 30,
                notes: "Visited the client's site",
              },
            ],
            timesheets: {
              Project1: {
                Overhead: [1, 1, 1, 0, 1.5, 1, 0],
                "Pre Design": [0, 0, 0, 0, 1, 1, 0],
                "Schematic Design": [1, 0, 2, 1, 0, 1.5, 1],
                "Add a Phase": [1, 0, 1, 0, 0, 1.5, 1],
              },
              Project2: {
                Overhead: [1, 1, 0, 0, 1, 0, 1],
                "Pre Design": [0, 0, 1, 0, 0, 0, 0],
                "Schematic Design": [0, 0, 1, 0, 0, 1, 1],
              },
            },
          },
          status: 200,
          statusText: "OK",
          headers: {
            ContentLocation: `/timesheet`,
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
            ContentLocation: `/timesheet`,
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
            ContentLocation: `/timesheet`,
          },
          config: {},
        })
      );
    },
  };
}

export const initMockTransport = (): Transporter => {
  return {
    cupola: new MockCupolaTransport(),
  };
};
