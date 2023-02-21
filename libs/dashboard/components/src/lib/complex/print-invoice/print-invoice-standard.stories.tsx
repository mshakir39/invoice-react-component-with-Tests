import { ComponentStory, ComponentMeta } from "@storybook/react";
import PrintInvoice from "./print-invoice";
const mockResponse = {
  type: "standard",
  invoiceNum: "#672368",
  invoiceDate: new Date().toLocaleDateString(),
  invoiceLogo:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDyaCe1G98CHYY5xiUzIEVEbYHVZpByo_eKw&usqp=CAU",
  terms: "no terms",
  taxRate: 20,
  invoiceData: [
    {
      description: "Shared Space",
      qty: 10,
      price: 20,
    },
  ],
  from: {
    companyName: "Capula Saofware",
    streetAddress: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10005",
    number: "(555) 555-1234",
  },
  invoiceFor: {
    companyName: "Vera Solutions",
    streetAddress: "624 La Sierra St.",
    city: "Tulare",
    state: "CA ",
    zip: "93274",
    number: "(555) 555-1262",
  },
  projectName: "Cybertron",
  notes: "not written",
};

export default {
  component: PrintInvoice,
} as ComponentMeta<typeof PrintInvoice>;

const Template: ComponentStory<typeof PrintInvoice> = (args) => (
  <PrintInvoice data={mockResponse} />
);

export const Primary = Template.bind({});
Primary.args = {};
