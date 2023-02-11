import { ComponentStory, ComponentMeta } from "@storybook/react";
import Invoice from "./invoice";

export default {
  component: Invoice,
} as ComponentMeta<typeof Invoice>;

const Template: ComponentStory<typeof Invoice> = (args) => <Invoice />;

export const Primary = Template.bind({});
Primary.args = {};
