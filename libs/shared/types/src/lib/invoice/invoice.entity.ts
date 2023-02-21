import { Column, Entity, OneToMany } from "typeorm";
import { EntityMeta } from "../common/entity-meta";

@Entity("invoice")
export class InvoiceEntity extends EntityMeta {
  @Column()
  type!: "standard" | "custom";

  @Column()
  invoiceNum!: string;

  @Column()
  invoiceDate!: Date;

  @Column()
  terms!: string;

  @Column()
  From!: Record<string, string>;

  @Column()
  invoiceFor!: Record<string, string>;

  @Column()
  projectName!: string;

  @Column()
  taxRate!: number;

  @Column()
  invoiceData!: Array<Record<string, string>>;

  @Column()
  notes!: string;
}
