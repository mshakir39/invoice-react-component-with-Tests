import { HttpInstance } from "./http";
import { AxiosRequestConfig } from "axios";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CupolaTransporter, Transporter } from "./cupola-transporter";
import {
  InvoiceEntity,
  ProjectEntity,
  TimesheetEntryEntity,
} from "@cupola/types";
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

  invoice = {
    get: (): Promise<AxiosResponse<InvoiceEntity>> => {
      return new Promise<AxiosResponse>((resolve) =>
        resolve({
          data: {
            invoiceNum: "#482676",
            invoiceDate: new Date().toLocaleDateString(),
            terms: "No terms",
            invoiceLogo:
              "data:image/png;base64,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",
            from: {
              companyName: "Capula Saofware",
              streetAddress: "123 Main St",
              city: "New York",
              state: "NY",
              zip: "10005",
              number: "(555) 555-1234",
            },
            invoiceFor: {
              companyName: "Wiser Solutions",
              streetAddress: "0982 Main St",
              city: "California",
              state: "CL",
              zip: "90011",
              number: "(555) 555-0123",
            },
            projectName: "Project zero",
            taxRate: 10,
            invoiceData: [
              {
                description: "Seats",
                qty: 10,
                price: 20,
              },
            ],

            notes: "not written yet",
          },
          status: 200,
          statusText: "OK",
          headers: {
            ContentLocation: `/invoice}`,
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
