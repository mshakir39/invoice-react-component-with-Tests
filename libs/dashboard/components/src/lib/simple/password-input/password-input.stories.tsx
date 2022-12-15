import React from "react";
import PasswordInput from "./index";
import { ComponentMeta } from "@storybook/react";

export default {
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

export const PasswordComponentInput = () => <PasswordInput text="Accept" />;
