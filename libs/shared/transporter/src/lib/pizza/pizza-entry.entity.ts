import { Column, Entity, ManyToOne, Unique } from "typeorm";
import {EntityMeta} from "@cupola/types";

@Entity("pizza_entry")
@Unique(["something"])
export class PizzaEntryEntity extends EntityMeta {

  @Column("text", { default: "" })
  something!: string;

  @Column("text", { default: "" })
  somethingElse!: string;

  @Column("text", { default: 0 })
  yetMore!: number;

}
