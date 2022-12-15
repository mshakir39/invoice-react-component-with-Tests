import { Amount } from "./measurements";
/**
 * Projects have one of the following contract types.
 *
 */
export type ProjectContractType = Fixed;

export abstract class Fixed {
  TotalContractAmount!: Amount;
}

export type Hours = number & { __brand: "Hours" };
