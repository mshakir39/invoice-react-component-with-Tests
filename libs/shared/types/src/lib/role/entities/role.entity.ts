import { Column, Entity, OneToMany } from "typeorm";
import { EntityMeta } from "../../common/entity-meta";

@Entity("role")
export class RoleEntity extends EntityMeta {
  @Column({ length: 128, unique: true })
  name!: string;

  @Column({ default: false })
  isDefault!: boolean;

  @Column({ default: false })
  isAdmin!: boolean;

}
