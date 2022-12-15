import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

/**
 * Every entity extends from EntityMeta to represent common must have table fields
 */
export abstract class EntityMeta {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt!: Date;

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt!: Date;

  /**
   * This is used for soft deletes.
   */
  @DeleteDateColumn({ type: "timestamptz" })
  deletedAt?: Date;
}
