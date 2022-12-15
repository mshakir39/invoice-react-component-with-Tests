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

export interface CanChangeState {
  changeState(state: ProjectState): void;
}

export interface CallBackMap {
  [key: string]: CallableFunction;
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
