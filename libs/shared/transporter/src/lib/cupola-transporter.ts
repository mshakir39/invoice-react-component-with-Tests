import { AxiosInstance, AxiosResponse } from "axios";
import {
  InvoiceEntity,
  ProjectEntity,
  TimesheetEntryEntity,
} from "@cupola/types";
import { APIRoutes } from "./routes";

export interface Transporter {
  cupola: CupolaTransporter;
}

export interface CupolaTransporter {
  http: AxiosInstance;
  host: string;
  apiRoutes: APIRoutes;

  project: {
    getAll: (filter?: Partial<ProjectEntity>) => Promise<AxiosResponse>;
  };

  timesheet: {
    get: (
      startDate: Date,
      endDate: Date
    ) => Promise<AxiosResponse<TimesheetEntryEntity[]>>;
    post: (
      date: Date,
      hoursWorked: number,
      minsWorked: number,
      projectId: string,
      notes: string,
      phase: string
    ) => Promise<AxiosResponse<Partial<TimesheetEntryEntity>>>;
  };
  invoice: {
    get: (
      type?: string,
      invoiceNum?: string,
      invoiceDate?: Date,
      terms?: string,
      from?: Record<string, string>,
      invoiceFor?: Record<string, string>,
      projectName?: string,
      taxRate?: number,
      invoiceData?: Array<Record<string, string>>,
      notes?: string
    ) => Promise<AxiosResponse<InvoiceEntity>>;
    post: (
      type?: string,
      invoiceNum?: string,
      invoiceDate?: Date,
      terms?: string,
      from?: Record<string, string>,
      invoiceFor?: Record<string, string>,
      projectName?: string,
      taxRate?: number,
      invoiceData?: Array<Record<string, string>>,
      notes?: string
    ) => Promise<AxiosResponse<Partial<InvoiceEntity>>>;
  };
}
