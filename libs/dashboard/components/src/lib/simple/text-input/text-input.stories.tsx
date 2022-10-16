import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextInput } from "./text-input";

export default {
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Example Label",
  required: true,
  dataTestId: "example-test-id",
};
