import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProjectPage } from "./project-page";

export default {
  component: ProjectPage,
} as ComponentMeta<typeof ProjectPage>;

const Template: ComponentStory<typeof ProjectPage> = (args) => (
  <ProjectPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
