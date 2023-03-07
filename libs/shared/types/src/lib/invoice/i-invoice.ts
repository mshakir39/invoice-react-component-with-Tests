import {IInvoiceRow} from "./i-invoice-row";
import {IInvoiceCompany} from "./i-invoice-company";

export interface IInvoice {
  type?: string;
  invoiceNum?: string;
  invoiceLogo?: string;
  invoiceDate?: Date | string;
  terms?: string;
  from?: IInvoiceCompany;
  invoiceFor?: IInvoiceCompany;
  projectName?: string;
  taxRate?: number;
  invoiceData?: IInvoiceRow[];
  notes?: string;
}
