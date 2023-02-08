import { AxiosResponse } from "axios";
import {
  ProjectEntity,
  TimesheetEntryEntity,
} from "@cupola/types";

export interface Transporter {
  cupola: CupolaTransporter;
}

export interface CupolaTransporter {

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
  project: {
    getAll: (filter?: Partial<ProjectEntity>) => Promise<AxiosResponse<ProjectEntity[]>>;
  };
}
