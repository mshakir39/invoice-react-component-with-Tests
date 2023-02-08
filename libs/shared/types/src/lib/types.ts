import { DateTime } from "luxon";

/**
 * Enum for verifying environments where an app is running on.
 */
export const RunMode = Object.freeze({
  Dev: "development",
  Local: "local",
  QA: "qa",
});

export enum ProjectState {
  PENDING = "Pending",
  APPROVED = "Approved",
  DISAPPROVED = "Disapproved",
  FINISHED = "Finished",
  PAUSED = "Paused",
}

export enum CupolaProjectType {
  SINGLE_FAMILY = "Single Family",
  MULTI_FAMILY = "Multi Family",
  OFFICE = "Office",
  HEALTH_CARE = "Health Care",
  EDUCATION = "Education",
  RETAIL = "Retail",
  HOSPITALITY = "Hospitality",
  OTHER = "Other",
}

export enum CupolaProjectPriority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

export enum ProjectAndTaskPhase {
  PRE_DESIGN = "Pre-Design",
  SCHEMATIC_DESIGN = "Schematic Design",
  DESIGN_DEVELOPMENT = "Design Development",
  CONSTRUCTION_DOCS = "Construction Documents",
  PERMITTING = "Permitting",
  GC_BIDDING = "GC Bidding",
  CONSTRUCTION_ADMINISTRATION = "Construction Administration",
  DESIGN = "Design",
  DOCUMENT = "Document",
  BUILD = "Build",
}

export interface CanChangeState {
  changeState(state: ProjectState): void;
}

export interface CallBackMap {
  [key: string]: CallableFunction;
}

export class ProjectFeeTemplate {
  phase!: string;
  numberOfHoursNotToExceed!: number;
  fixedFeePercentage!: number;
  consultantFeePercentage!: number;
  projectTimePercentage!: number;
}

export interface FeeTemplateInterface {
  templates: ProjectFeeTemplate[];
  type: string;
}

export interface DerivedProjectFeeTemplate {
  phase: string;
  numberOfHoursNotToExceed: number;
  fixedFeePercentage: number;
  _fixedFeeAmount: number;
  consultantFeePercentage: number;
  _consultantFeeAmount: number;
  projectTimePercentage: number;
  _projectTimeAmount: number;
  _startDate: DateTime | string;
  _endDate: DateTime | string;
  _isDirty: boolean;
}

export interface DerivedFeeTemplate {
  totalProjectTimeAmount: number;
  templates: DerivedProjectFeeTemplate[];
  type: string;
}

/* Use only for string enums; results not guaranteed with other types. */
export const getEnumKeyTexts = (source: {
  [key: string]: unknown;
}): string[] => {
  const texts = [];

  // Because every enum is basically an object.
  for (const key in source) {
    texts.push(source[key] as string);
  }

  return texts;
};
