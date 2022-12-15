import { ComponentStory, ComponentMeta } from "@storybook/react";
import { <%= className %> } from "./<%= fileName %>";

export default {
  component: <%= className %>,
} as ComponentMeta<typeof <%= className %>>;

const Template: ComponentStory<typeof <%= className %>> = (args) => (
  <<%= className %> {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
