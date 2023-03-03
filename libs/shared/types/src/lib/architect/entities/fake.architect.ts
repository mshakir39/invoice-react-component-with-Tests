import { ArchitectEntity } from "./architect.entity";
import { faker } from "@faker-js/faker";
import { v4 as UUIDv4 } from "uuid";
import { RoleEntity } from "../../role/entities/role.entity";
import { fakeUUIDV4 } from "../../common/fake-simple-values";

/**
 * Fake architect entity as is in database.
 */
export const fakeArchitect = (): ArchitectEntity => {
  const architect = new ArchitectEntity();

  architect.name = faker.name.fullName();
  architect.email = faker.internet.email();
  architect.emails = [faker.internet.email()];
  architect.id = UUIDv4();
  architect.weeklyTargetHours = Math.floor(Math.random() * (40 - 10 + 1) + 10);
  architect.vacationDayAllowance = Math.floor(
    Math.random() * (224 - 56 + 1) + 56
  );
  architect.sickDayAllowance = Math.floor(Math.random() * (80 - 40 + 1) + 40);
  architect.salaryRate = Math.floor(Math.random() * (200 - 50 + 1) + 50);
  architect.billingRate = architect.salaryRate * 1.5;
  architect.updatedAt = new Date();
  architect.createdAt = new Date();

  return architect;
};

export function fakeAdminArchitect(): ArchitectEntity {
  const architect = fakeArchitect();
  return architect;
}
