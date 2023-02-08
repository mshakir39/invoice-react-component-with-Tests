import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { EntityMeta } from "../../common/entity-meta";
import { ProjectAndTaskPhase } from "../../types";
import { ProjectEntity } from "../../project/entities/project.entity";

@Entity("timesheet_entry")
@Unique(["date", "phase", "project"])
export class TimesheetEntryEntity extends EntityMeta {
  @Column("date", { nullable: false })
  date: Date;

  @Column("int", { default: 0 })
  hours!: number;

  @Column("int", { default: 0 })
  minutes!: number;

  @Column("text", { default: "" })
  notes!: string;

  @Column("text", { nullable: false })
  phase!: ProjectAndTaskPhase;

  @Column("text", { default: "" })
  projectId!: string;
}
