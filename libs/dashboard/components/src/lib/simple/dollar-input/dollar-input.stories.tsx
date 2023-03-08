import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DollarInput } from "./dollar-input";

export default {
  component: DollarInput,
} as ComponentMeta<typeof DollarInput>;

const Template: ComponentStory<typeof DollarInput> = (args) => (
  <DollarInput {...args} value="342" />
);

export const Primary = Template.bind({});
Primary.args = {};
