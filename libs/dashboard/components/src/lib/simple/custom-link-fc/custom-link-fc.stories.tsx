import React from "react";
import CustomLinkFC from "./index";
import { ComponentMeta } from "@storybook/react";

export default {
  component: CustomLinkFC,
} as ComponentMeta<typeof CustomLinkFC>;
export const CreateAccount = () => (
  <CustomLinkFC href={"./"} text={"Create account"} />
);

export const ForgotPassword = () => (
  <CustomLinkFC href={"./"} text={"Forgot password?"} />
);

export const LogIn = () => <CustomLinkFC href={"./"} text={"Log In"} />;
