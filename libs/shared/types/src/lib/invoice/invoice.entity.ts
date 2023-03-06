import { Column, Entity, OneToMany } from "typeorm";
import { EntityMeta } from "../common/entity-meta";
import {
  IfromAndfor,
  IinvoiceData,
} from "../../lib/../../../../../libs/dashboard/components/src/constants/interfaces";

@Entity("invoice")
export class InvoiceEntity extends EntityMeta {
  @Column()
  type!: string;

  @Column()
  invoiceNum!: string;

  @Column()
  invoiceDate!: Date;

  @Column()
  invoiceLogo!: string;

  @Column()
  terms!: string;

  @Column()
  from!: IfromAndfor;

  @Column()
  invoiceFor!: IfromAndfor;

  @Column()
  projectName!: string;

  @Column()
  taxRate!: number;

  @Column()
  invoiceData!: IinvoiceData[];

  @Column()
  notes!: string;
}
