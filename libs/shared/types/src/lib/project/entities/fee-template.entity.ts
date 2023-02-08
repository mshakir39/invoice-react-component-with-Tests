import { Column, Entity, OneToMany } from "typeorm";
import { EntityMeta } from "../../common/entity-meta";
import type { ProjectEntity } from "./project.entity";
import { ProjectFeeTemplate } from "../../types";

/**
 * A project represents a work a client's requires an architect to do.
 */
@Entity("fee-template")
export class FeeTemplate extends EntityMeta {
  @Column("jsonb", {
    select: true,
  })
  templates!: ProjectFeeTemplate[];

  @Column("text")
  type!: string;

  @OneToMany("ProjectEntity", (project: ProjectEntity) => project.feeTemplate)
  projects!: ProjectEntity[];
}
