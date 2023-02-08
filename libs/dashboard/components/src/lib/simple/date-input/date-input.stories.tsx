import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DateInput } from "./date-input";

export default {
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => (
  <DateInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
