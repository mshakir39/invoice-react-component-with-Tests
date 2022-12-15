import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TabPanel } from "./tab-panel";

export default {
  component: TabPanel,
} as ComponentMeta<typeof TabPanel>;

const Template: ComponentStory<typeof TabPanel> = (args) => (
  <TabPanel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  parent: "",
  index: 0,
  selected: 0,
  children: (
    <div
      style={{ padding: "25px", fontFamily: "sans-serif", fontSize: "125%" }}
    >
      Real content would be set using .props.children, as this text has been.
    </div>
  ),
};
