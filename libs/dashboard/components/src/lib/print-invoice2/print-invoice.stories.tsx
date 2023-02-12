import { ComponentStory, ComponentMeta } from "@storybook/react";
import PrintInvoice from "./print-invoice";

export default {
  component: PrintInvoice,
} as ComponentMeta<typeof PrintInvoice>;

const Template: ComponentStory<typeof PrintInvoice> = (args) => (
  <PrintInvoice />
);

export const Primary = Template.bind({});
Primary.args = {};
