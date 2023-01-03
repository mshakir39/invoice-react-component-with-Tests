import { faker } from "@faker-js/faker";
import { v4 as UUIDv4 } from "uuid";
import { DateTime } from "luxon";
import { Address } from "./address";

/**
 * Fake an address.
 */
export function fakeAddress(): Address {
  return {
    streets: [faker.address.street()],
    zipCode: faker.address.zipCode(),
    city: faker.address.city(),
    state: faker.address.state(),
    country: "USA",
  };
}

export function fakeStartDateTime(): DateTime {
  return DateTime.fromISO(faker.date.future(0, new Date()).toISOString());
}

export function fakeEndDate(refDate: Date): Date {
  return new Date(faker.date.future(0, refDate.getDate()).toISOString());
}

export function fakeFullName(): string {
  return faker.name.fullName();
}

export function fakeEmail(): string {
  return faker.internet.email();
}

export function fakeUUIDV4(): string {
  return UUIDv4();
}

export function fakePhrase(): string {
  return faker.company.name();
}
