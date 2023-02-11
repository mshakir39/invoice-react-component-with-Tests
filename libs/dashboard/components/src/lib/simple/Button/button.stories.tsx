import { ComponentStory, ComponentMeta } from "@storybook/react";
import MyButton from "./button";

export default {
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Download",
  variant: "contained",
  color: "primary",
};
