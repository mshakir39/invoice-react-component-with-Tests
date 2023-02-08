import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CupolaThemeProvider } from "./cupola-theme-provider";

export default {
  component: CupolaThemeProvider,
  title: "CupolaThemeProvider",
} as ComponentMeta<typeof CupolaThemeProvider>;

const Template: ComponentStory<typeof CupolaThemeProvider> = (args) => (
  <CupolaThemeProvider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
