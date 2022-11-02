import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectInput } from "./select-input";

export default {
  component: SelectInput,
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => (
  <SelectInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Select Examples",
  required: true,
  options: ["Kitten", "Puppy"],
  dataTestId: "",
};
