import React from "react";
import CheckBox from "./index";
import { ComponentMeta } from "@storybook/react";

export default {
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;
export const DefaultCheckBox = () => <CheckBox />;
