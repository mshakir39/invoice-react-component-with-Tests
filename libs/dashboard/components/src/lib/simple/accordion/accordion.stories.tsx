import { ComponentStory, ComponentMeta } from "@storybook/react";
import Accordion from "./accordion";

import { MdGroups } from "react-icons/md";

export default {
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion
    {...args}
    typographyStyle={{
      fontWeight: "600",
      display: "flex",
      alignItems: "flex-end",
    }}
    Icon={
      <MdGroups
        style={{ fontSize: "1.6rem", marginRight: "46px" }}
        data-testid="accordion-icon-testId"
      />
    }
  >
    Children here
  </Accordion>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Internal Team",
  dataTestId: "accordion-id",
};
