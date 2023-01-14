import { DateTime } from 'luxon';
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    nexttab?: string;
    pretab?: string;
  }
}

export interface IUserUpdateForm {
  email: string | null;
  currPw: string | null;
  newPw: string | null;
  newPwConfirm: string | null;
}
// timesheet page interfaces
export interface ITaskWeek {
  fieldName: string;
  hoursOfTaskWeek: Array<ITimeEntry>;
  startTabIndex: number;
  onChangeHoursOfTaskWeeks: (hoursOfTaskWeek: Array<ITimeEntry>) => void;
  isEditableEntries: boolean;
}
export interface ITimesheetsPage {
  onChangeTimesheetEntries: (item: string) => void;
}
export interface ITimesheets {
  [index: string]: {
    [index: string]: ITimeEntry[];
  };
}

export interface ITimeEntry {
  date: DateTime | string;
  hours: number;
  minutes: number;
  notes: string;
}

export interface ITimesheetHoursWorkedProp {
  startDate: string;
  endDate: string;
  totalHoursWorked: number;
  hoursAvailable: number;
  onChangeHoursWorked?: (hoursWorked: {
    startDate: string;
    endDate: string;
    totalHoursWorked: number;
    hoursAvailable: number;
    utilizationRate: number;
  }) => void | undefined;
}

export interface ITimesheetNoteForm {
  date: DateTime;
  project: string;
  phase: string;
  notes: string;
}

export interface ITimsheetNoteDialog {
  startDate: DateTime;
  title: string;
  isOpen: boolean;
  onSubmitForm: (timeEntry: ITimesheetNoteForm) => void;
  onClose?: () => void;
}

export enum TypeRow {
  Project,
  Phase,
  Total,
}

export interface ITimesheet {
  id: number;
  PhaseName: string;
  TotalHours: number;
  Monday: ITimeEntry;
  Tuesday: ITimeEntry;
  Wednesday: ITimeEntry;
  Thursday: ITimeEntry;
  Friday: ITimeEntry;
  Saturday: ITimeEntry;
  Sunday: ITimeEntry;
  Type: TypeRow;
  PhaseOfProject: string;
}