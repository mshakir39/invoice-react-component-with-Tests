export interface APIRoutes {
  register: string;
  auth: {
    whoAmi: string;
    logout: string;
    login: string;
    password: string;
    email: string;
  };
  projects: {
    getAll: string;
    create: string;
    update: string;
    changeState: string;
    getAllTemplates: string;
    updateDerivedFeeTemplate: string;
    addTeamMember: string;
    removeTeamMember: string;
    changeCurrentPhase: (id: string) => string;
    updateStartDate: (id: string) => string;
    updateEndDate: (id: string) => string;
  };
  client: { create: string; getAll: string; get: string; update: string };
  architect: { getAll: string; update: string };
  role: { getAll: string };
  task: {
    create: string;
    update: string;
    delete: string;
    listByArchitect: string;
    listByProject: string;
    getAll: string;
    updateProgress: string;
  };
  teamMember: {
    create: string;
    update: string;
  };
  timesheet: { get: string; post: string };
  invoice: { get: string };
}

export const changeCurrentPhaseRoute = (id: string) =>
  `api/project/${id}/current-phase`;

export const updateStartDate = (id: string) => `api/project/${id}/start-date`;
export const updateEndDate = (id: string) => `api/project/${id}/end-date`;

export const apiRoutes: APIRoutes = {
  register: "api/architect",
  auth: {
    login: "api/auth/login",
    logout: "api/auth/logout",
    whoAmi: "api/auth/me",
    password: "api/auth/password",
    email: "api/auth/email",
  },
  projects: {
    getAll: "api/project",
    create: "api/project",
    update: "api/project",
    changeState: "api/project",
    getAllTemplates: "api/project/templates/get",
    updateDerivedFeeTemplate: "api/project",
    addTeamMember: "api/project",
    removeTeamMember: "api/project",
    changeCurrentPhase: changeCurrentPhaseRoute,
    updateStartDate: updateStartDate,
    updateEndDate: updateEndDate,
  },
  client: {
    create: "api/client",
    getAll: "api/client",
    get: "api/client",
    update: "api/client",
  },
  architect: {
    getAll: "api/architect",
    update: "api/architect",
  },
  role: {
    getAll: "api/role",
  },
  task: {
    create: "api/task",
    update: "api/task",
    updateProgress: "api/task/progress",
    delete: "api/task",
    listByArchitect: "api/task/architect",
    listByProject: "api/task/project",
    getAll: "api/task",
  },
  teamMember: {
    create: "api/architect/team-member",
    update: "api/team-member",
  },
  timesheet: {
    get: "api/timesheet",
    post: "api/timesheet",
  },
  invoice: {
    get: "api/invoice",
  },
};
