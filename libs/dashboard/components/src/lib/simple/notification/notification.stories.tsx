import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Notification } from "./notification";

export default {
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
