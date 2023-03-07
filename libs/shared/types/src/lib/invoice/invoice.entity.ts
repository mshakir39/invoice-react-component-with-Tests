import { Column, Entity, OneToMany } from "typeorm";
import { EntityMeta } from "../common/entity-meta";
import {
  IInvoiceCompany,

} from "./i-invoice-company";
import {IInvoiceRow} from "./i-invoice-row";

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
  from!: IInvoiceCompany;

  @Column()
  invoiceFor!: IInvoiceCompany;

  @Column()
  projectName!: string;

  @Column()
  taxRate!: number;

  @Column()
  invoiceData!: IInvoiceRow[];

  @Column()
  notes!: string;
}
