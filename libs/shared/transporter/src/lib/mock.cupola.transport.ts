import { HttpInstance } from "./http";
import { AxiosRequestConfig } from "axios";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CupolaTransporter, Transporter } from "./cupola-transporter";
import { ProjectEntity, TimesheetEntryEntity } from "@cupola/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { apiRoutes, APIRoutes } from "./routes";

export class MockCupolaTransport implements CupolaTransporter {
  project = {
    getAll: async (filter?: Partial<ProjectEntity>): Promise<AxiosResponse> => {
      return new Promise<AxiosResponse>((resolve) =>
        resolve({
          data: [
            { id: "553f8fab-ec03-47ef-9000-9ac05cd1a689", name: "Project1" },
            { id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d", name: "Project2" },
          ],
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

  timesheet = {
    get: (
      startDate: Date,
      endDate: Date
    ): Promise<AxiosResponse<TimesheetEntryEntity[]>> => {
      return new Promise<AxiosResponse>((resolve) =>
        resolve({
          data: [
            {
              date: "2022-12-19",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Overhead",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-20",
              hours: 0,
              minutes: 30,
              notes: "",
              phase: "Overhead",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-21",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Overhead",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-22",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Overhead",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-23",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Overhead",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-24",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Overhead",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-25",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Overhead",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-19",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Pre Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-20",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Pre Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-21",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Pre Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-22",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Pre Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-23",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Pre Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-24",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Pre Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-25",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Pre Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-19",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Schematic Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-20",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Schematic Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-21",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Schematic Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-22",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Schematic Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-23",
              hours: 2,
              minutes: 0,
              notes: "",
              phase: "Schematic Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-24",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Schematic Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-25",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Schematic Design",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-19",
              hours: 0,
              minutes: 30,
              notes: "",
              phase: "Add a Phase",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-20",
              hours: 0,
              minutes: 30,
              notes: "",
              phase: "Add a Phase",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-21",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Add a Phase",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-22",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Add a Phase",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-23",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Add a Phase",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-24",
              hours: 0,
              minutes: 30,
              notes: "",
              phase: "Add a Phase",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-25",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Add a Phase",
              projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
            },
            {
              date: "2022-12-19",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Overhead",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-20",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Overhead",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-21",
              hours: 0,
              minutes: 30,
              notes: "",
              phase: "Overhead",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-22",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Overhead",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-23",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Overhead",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-24",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Overhead",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-25",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Overhead",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-19",
              hours: 0,
              minutes: 30,
              notes: "",
              phase: "Pre Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-20",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Pre Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-21",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Pre Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-22",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Pre Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-23",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Pre Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-24",
              hours: 0,
              minutes: 30,
              notes: "",
              phase: "Pre Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-25",
              hours: 0,
              minutes: 0,
              notes: "",
              phase: "Pre Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-19",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Schematic Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-20",
              hours: 0,
              minutes: 30,
              notes: "",
              phase: "Schematic Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-21",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Schematic Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-22",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Schematic Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-23",
              hours: 1,
              minutes: 0,
              notes: "",
              phase: "Schematic Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-24",
              hours: 2,
              minutes: 0,
              notes: "",
              phase: "Schematic Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
            {
              date: "2022-12-25",
              hours: 2,
              minutes: 0,
              notes: "",
              phase: "Schematic Design",
              projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            },
          ],
          status: 200,
          statusText: "OK",
          headers: {
            ContentLocation: `/timesheet}`,
          },
          config: {},
        })
      );
    },
    post: (
      date: Date,
      hours: number,
      minutes: number,
      projectId: string,
      notes: string,
      phase: string
    ): Promise<AxiosResponse<Partial<TimesheetEntryEntity>>> => {
      return new Promise<AxiosResponse>((resolve) =>
        resolve({
          data: {
            date: date,
            hours: hours,
            minutes: minutes,
            notes: notes,
            phase: phase,
            projectId: projectId,
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

export const initMockTransport = (): Transporter => {
  return {
    cupola: new MockCupolaTransport(),
  };
};
