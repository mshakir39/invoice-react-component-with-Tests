/**
 * Full address of client or other.
 */
export interface Address {
  /**
   * Streets represents line 1 and line 2 (e.g. apartment number) if any.
   * For example ["6751 kistler lane", "apt 107"]
   */
  streets: string[];
  city: string;
  state: string;
  zipCode: string;
  country: "USA";
}
