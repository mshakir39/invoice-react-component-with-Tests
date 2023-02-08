import {
  Column,
  Entity, ManyToOne,
} from "typeorm";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { DerivedFeeTemplate, DerivedProjectFeeTemplate, getEnumKeyTexts, ProjectAndTaskPhase } from '@cupola/types';
import { EntityMeta } from '../../common/entity-meta';
import type {FeeTemplate} from "./fee-template.entity";


@Entity("project")
export class ProjectEntity extends EntityMeta {

  @Column()
  name!: string;

  @Column()
  projectId!: string;

  @Column("jsonb", { nullable: true })
  derivedFeeTemplate?: DerivedFeeTemplate;

  @ManyToOne(
    "FeeTemplate",
    (feeTemplate1: FeeTemplate) => feeTemplate1.projects,
    { nullable: true }
  )
  feeTemplate?: FeeTemplate;


  @Column("text", { nullable: true })
  currentPhase?: string;

  async supplyPhases(): Promise<string[]> {
    const phaseObjects: DerivedProjectFeeTemplate[] =
      this.derivedFeeTemplate?.templates || [];
    let phases: string[];

    if (phaseObjects && phaseObjects.length > 0) {
      phases = phaseObjects.map((phaseItem) => phaseItem.phase);
    } else {
      phases = getEnumKeyTexts(ProjectAndTaskPhase);
    }

    return phases;
  }

}
