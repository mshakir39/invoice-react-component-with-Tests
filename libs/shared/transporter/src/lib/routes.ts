export interface APIRoutes {
  projects: {
    getAll: string;
  };
  timesheet: { get: string; post: string };
}

export const changeCurrentPhaseRoute = (id: string) =>
  `api/project/${id}/current-phase`;

export const apiRoutes: APIRoutes = {
  projects: {
    getAll: "api/project",
  },
  timesheet: {
    get: "api/timesheet",
    post: "api/timesheet",
  },
};
