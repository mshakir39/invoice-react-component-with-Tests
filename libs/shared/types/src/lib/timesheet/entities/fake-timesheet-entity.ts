import { fakeProject } from "../../project/entities/fake.project";
import { TimesheetEntryEntity } from "../../timesheet/entities/timesheet-entry.entity";
import { ProjectAndTaskPhase } from "../../types";
import { v4 as UUIDv4 } from "uuid";

export const fakeTimesheetEntity = (
  project = fakeProject()
): TimesheetEntryEntity => {
  return {
    id: UUIDv4(),
    date: new Date(),
    hours: 8,
    minutes: 30,
    notes: "Fake notes",
    phase: ProjectAndTaskPhase.BUILD,
    project: project,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};
