import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TabbedDisplay } from "./tabbed-display";
import { TabPanel } from "../../simple/tab-panel/tab-panel";

export default {
  component: TabbedDisplay,
} as ComponentMeta<typeof TabbedDisplay>;

const tabPanelSx = { fontFamily: "sans-serif", padding: "16px" };

const Template: ComponentStory<typeof TabbedDisplay> = (args) => (
  <TabbedDisplay {...args}>
    <TabPanel index={0}>
      <div style={tabPanelSx}>Content for tab one would go here.</div>
    </TabPanel>
    <TabPanel index={1}>
      <div style={tabPanelSx}>Content for tab two would go here.</div>
    </TabPanel>
  </TabbedDisplay>
);

export const Primary = Template.bind({});
Primary.args = {
  tabLabels: ["Example Tab One", "Example Tab Two"],
};
