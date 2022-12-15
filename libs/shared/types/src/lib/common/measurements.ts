/**
 * Representation of measurements.
 */
export interface Measurement<T> {
  unit: T;
  value: number;
}

/**
 * A representation of dollar amount.
 */
export type Amount = Measurement<"USD">;

/**
 * A representation of Percentage.
 */
export type Percentage = Measurement<"%">;
