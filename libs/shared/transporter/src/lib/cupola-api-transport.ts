import { CupolaTransporter } from "./cupola-transporter";
import { AxiosInstance, AxiosResponse } from "axios";

import {
  ProjectEntity,
  TimesheetEntryEntity,
  InvoiceEntity,
} from "@cupola/types";

import { APIRoutes } from "./routes";

export class CupolaAPITransport implements CupolaTransporter {
  host: string;
  constructor(
    readonly getHost: () => string,
    readonly http: AxiosInstance,
    readonly apiRoutes: APIRoutes
  ) {
    this.host = getHost();
  }

  project = {
    getAll: async (filter?: Partial<ProjectEntity>): Promise<AxiosResponse> => {
      return this.http.get(`${this.host}/${this.apiRoutes.projects.getAll}`, {
        params: filter,
      });
    },
  };
  invoice = {
    get: (
      type?: string,
      invoiceNum?: string,
      invoiceLogo?: string,
      invoiceDate?: Date,
      terms?: string,
      from?: Record<string, string>,
      invoiceFor?: Record<string, string>,
      projectName?: string,
      taxRate?: number,
      invoiceData?: Array<Record<string, string>>,
      notes?: string
    ): Promise<AxiosResponse<InvoiceEntity>> => {
      return this.http.get(`${this.host}/${this.apiRoutes.invoice.get}`, {
        params: {
          type: type,
          invoiceNum: invoiceNum,
          invoiceDate: invoiceDate,
          invoiceLogo: invoiceLogo,
          terms: terms,
          from: from,
          invoiceFor: invoiceFor,
          projectName: projectName,
          taxRate: taxRate,
          invoiceData: invoiceData,
          notes: notes,
        },
      });
    },
    post: (
      type?: string,
      invoiceNum?: string,
      invoiceLogo?: string,
      invoiceDate?: Date,
      terms?: string,
      from?: Record<string, string>,
      invoiceFor?: Record<string, string>,
      projectName?: string,
      taxRate?: number,
      invoiceData?: Array<Record<string, string>>,
      notes?: string
    ): Promise<AxiosResponse<Partial<InvoiceEntity>>> => {
      return this.http.post(`${this.host}/${this.apiRoutes.invoice.post}`, {
        type: type,
        invoiceNum: invoiceNum,
        invoiceLogo: invoiceLogo,
        invoiceDate: invoiceDate,
        terms: terms,
        from: from,
        invoiceFor: invoiceFor,
        projectName: projectName,
        taxRate: taxRate,
        invoiceData: invoiceData,
        notes: notes,
      });
    },
  };

  timesheet = {
    get: (
      startDate: Date,
      endDate: Date
    ): Promise<AxiosResponse<TimesheetEntryEntity[]>> => {
      return this.http.get(`${this.host}/${this.apiRoutes.timesheet.get}`, {
        params: {
          startDate: startDate.toISOString().replace(/T.*/, ""),
          endDate: endDate.toISOString().replace(/T.*/, ""),
        },
      });
    },
    post: (
      date: Date,
      hours: number,
      minutes: number,
      projectId: string,
      notes: string,
      phase: string
    ): Promise<AxiosResponse<Partial<TimesheetEntryEntity>>> => {
      return this.http.post(`${this.host}/${this.apiRoutes.timesheet.post}`, {
        date: date,
        hours: hours,
        minutes: minutes,
        notes: notes,
        phase: phase,
        projectId: projectId,
      });
    },
  };
}
