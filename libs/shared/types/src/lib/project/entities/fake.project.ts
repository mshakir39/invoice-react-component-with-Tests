import {
  fakeClient,
  FeeTemplate,
  ProjectEntity,
} from "./../../../index";
import { v4 as UUIDv4 } from "uuid";

export const fakeProject = (): ProjectEntity => {

  const project = new ProjectEntity();
  project.id = UUIDv4();
  project.createdAt = new Date();
  project.updatedAt = new Date();

  project.contractType = {
    TotalContractAmount: {
      unit: "USD",
      value: 10000000,
    },
  };

  return project;
};
