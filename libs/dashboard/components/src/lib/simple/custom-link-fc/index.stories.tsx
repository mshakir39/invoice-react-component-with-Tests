import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomLinkFC from "./index";

export default {
  component: CustomLinkFC,
  argTypes: {
    href: { control: { type: "boolean" } },
    text: { control: { type: "string" } },
  },
} as ComponentMeta<typeof CustomLinkFC>;

const Template: ComponentStory<typeof CustomLinkFC> = (args) => (
  <CustomLinkFC {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  href: "",
  text: "",
};
