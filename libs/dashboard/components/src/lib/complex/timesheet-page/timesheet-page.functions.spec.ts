import {
  fakeArchitect,
  fakeClient,
  fakeProject,
  fakeTimesheetEntity,
  ProjectAndTaskPhase,
} from "@cupola/types";
import {
  getDayName,
  getWeekBeginning,
  getWeekDates,
  renderRow,
  totalHours,
  totalHoursByPhase,
  totalHoursPerDay,
} from "./timesheet-page.functions";
import { ITimeEntry, TypeRow } from "../../../constants/interfaces";
import { DatesByDay, days } from "./timesheet-page";
import { DateTime } from "luxon";

describe("timesheetPageFunctions", () => {
  const sourceDate = "01-01-2023";
  const sourceDateISO = new Date(sourceDate).toISOString();

  it("should render row", () => {
    const hoursByDay: { [index: string]: ITimeEntry } = {};
    days.forEach((day, dayIndex) => {
      hoursByDay[days[dayIndex]] = {
        date: "",
        hours: 0,
        minutes: 0,
        notes: "",
      };
    });

    const id = 1;
    const phaseName = "Phase";
    const totalHours = 0;
    const type = TypeRow.Project;
    const phaseOfProject = "Project";
    const project = fakeProject();

    const expected = {
      ...hoursByDay,
      id: id,
      PhaseName: phaseName,
      TotalHours: totalHours,
      Type: type,
      PhaseOfProject: phaseOfProject,
      Project: project,
    };

    const actual = renderRow(
      id,
      phaseName,
      hoursByDay,
      totalHours,
      type,
      phaseOfProject,
      project
    );

    expect(actual).toEqual(expected);
  });

  it("should getDayName", () => {
    expect(getDayName(sourceDate)).toEqual("Sunday");
  });

  it("should getWeekBeginning", () => {
    expect(getWeekBeginning(sourceDateISO).toISO()).toEqual(
      DateTime.fromISO(new Date("12-26-2022").toISOString()).toISO()
    );
  });

  it("should getWeekDates", () => {
    const expected: DatesByDay = {
      Monday: DateTime.fromISO(new Date("12-26-2022").toISOString()),
      Tuesday: DateTime.fromISO(new Date("12-27-2022").toISOString()),
      Wednesday: DateTime.fromISO(new Date("12-28-2022").toISOString()),
      Thursday: DateTime.fromISO(new Date("12-29-2022").toISOString()),
      Friday: DateTime.fromISO(new Date("12-30-2022").toISOString()),
      Saturday: DateTime.fromISO(new Date("12-31-2022").toISOString()),
      Sunday: DateTime.fromISO(new Date("01-01-2023").toISOString()),
    };
    const actual = getWeekDates(sourceDateISO);

    expect(actual).toEqual(expected);
  });

  it("should calculateTotalHours", () => {
    const hoursByDay: { [index: string]: ITimeEntry } = {
      Monday: {
        date: DateTime.fromISO(new Date("12-26-2022").toISOString()),
        hours: 1,
        minutes: 0,
        notes: "",
      },
      Tuesday: {
        date: DateTime.fromISO(new Date("12-27-2022").toISOString()),
        hours: 1,
        minutes: 0,
        notes: "",
      },
      Wednesday: {
        date: DateTime.fromISO(new Date("12-28-2022").toISOString()),
        hours: 1,
        minutes: 0,
        notes: "",
      },
      Thursday: {
        date: DateTime.fromISO(new Date("12-29-2022").toISOString()),
        hours: 1,
        minutes: 0,
        notes: "",
      },
      Friday: {
        date: DateTime.fromISO(new Date("12-30-2022").toISOString()),
        hours: 1,
        minutes: 0,
        notes: "",
      },
      Saturday: {
        date: DateTime.fromISO(new Date("12-31-2022").toISOString()),
        hours: 1,
        minutes: 0,
        notes: "",
      },
      Sunday: {
        date: DateTime.fromISO(new Date("01-01-2023").toISOString()),
        hours: 1,
        minutes: 0,
        notes: "",
      },
    };

    expect(totalHours(hoursByDay)).toEqual(7);
  });
});

describe("calculate total hours", () => {
  const architect = fakeArchitect();
  const project = fakeProject();
  project.phase = ProjectAndTaskPhase.BUILD;
  const weekday = DateTime.fromISO(new Date().toISOString()).weekdayLong;

  it("should calculateTotalHoursPerDay", () => {
    const entry = fakeTimesheetEntity(project, architect);
    entry.hours = 8;
    entry.minutes = 0;

    const actual = totalHoursPerDay([entry]);

    expect(actual[weekday].hours).toEqual(entry.hours + entry.minutes / 60);
  });

  it("should calculateTotalHoursPerPhase", () => {
    const entry = fakeTimesheetEntity(project, architect);
    entry.hours = 8;
    entry.minutes = 0;

    const matching = totalHoursByPhase([entry], ProjectAndTaskPhase.DESIGN);
    expect(matching[weekday].hours).toEqual(entry.hours + entry.minutes / 60);
  });
});
