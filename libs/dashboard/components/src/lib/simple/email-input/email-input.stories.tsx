import React from "react";
import EmailInput from "./index";
import { ComponentMeta } from "@storybook/react";

export default {
  component: EmailInput,
} as ComponentMeta<typeof EmailInput>;
export const EmailComponentInput = () => <EmailInput />;
