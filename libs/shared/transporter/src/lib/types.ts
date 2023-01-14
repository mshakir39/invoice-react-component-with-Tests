import { DateTime } from 'luxon';
import { AxiosInstance, AxiosResponse } from "axios";
import {
  ACreateTeamMemberDto,
} from "@cupola/types";

export interface Transporter {
  cupola: CupolaTransporter;
}
export interface ITimeEntry {
  date: DateTime;
  project: string;
  phase: string;
  minutes: number;
  hours: number;
  note: string;
}

export interface INotes {
  date: DateTime;
  project: string;
  phase: string;
  notes: string;
}
export interface CupolaTransporter {
  http: AxiosInstance;
  host: string;
  apiRoutes: APIRoutes;
  teamMember: {
    create: (body: ACreateTeamMemberDto) => Promise<AxiosResponse>;
  };
  timesheet: {
    get: (startDate: string, endDate: string) => Promise<AxiosResponse>;
    updateTimesheet: (data: ITimeEntry) => Promise<AxiosResponse>;
    updateNotes: (data: INotes) => Promise<AxiosResponse>;
  }
}

export interface APIRoutes {
  teamMember: { create: string };
  timesheet: { get: string, updateTimesheet: string, updateNotes: string }
}
