import { ComponentStory, ComponentMeta } from "@storybook/react";
import { <%= className %>Page } from "./<%= fileName %>-page";

export default {
  component: <%= className %>Page,
} as ComponentMeta<typeof <%= className %>Page>;

const Template: ComponentStory<typeof <%= className %>Page> = (args) => (
  <<%= className %>Page {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
