import { APIRoutes } from "./types";

export const apiRoutes: APIRoutes = {

  teamMember: {
    create: "api/team-member",
  },
  timesheet: {
    get: "api/timesheet",
    updateTimesheet: "api/update-timesheet",
    updateNotes: "api/update-note"
  }
};
