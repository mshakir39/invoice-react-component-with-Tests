import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { EntityMeta } from "../../common/entity-meta";

import { TimesheetEntryEntity } from "../../timesheet/entities/timesheet-entry.entity";

@Entity("architect")
export class ArchitectEntity extends EntityMeta {
  @Column()
  email!: string;

  @Column("simple-array", {
    array: true,
    nullable: false,
    select: true,
  })
  emails!: string[];

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: true })
  billingRate?: number;

  @Column({ nullable: true })
  salaryRate?: number;

  @Column({ nullable: true })
  weeklyTargetHours?: number;

  @Column({ default: 0 })
  vacationDayAllowance?: number;

  @Column({ default: 0 })
  sickDayAllowance?: number;

  @OneToMany(
    "TimesheetEntryEntity",
    (timesheetEntry: TimesheetEntryEntity) => timesheetEntry.architect,
    { nullable: false }
  )
  timesheetEntries!: TimesheetEntryEntity[];
}
