import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserUpdateForm from "../user-update-form/user-update-form";
import AccountSettings from "./account-settings";
import { Box } from "@mui/system";
import { useState } from "react";
const userUpdateOnLoadForm = { email: "abc@gmail.com" };

export default {
  component: AccountSettings,
} as ComponentMeta<typeof AccountSettings>;

const Template: ComponentStory<typeof AccountSettings> = (args) => {
  const [userFormTest, setUserFormTest] = useState("");

  return (
    <Box>
      <AccountSettings {...args}>
        <UserUpdateForm
          onSubmitForm={(user) => setUserFormTest(JSON.stringify(user))}
          userUpdate={userUpdateOnLoadForm}
        />
      </AccountSettings>
      <textarea
        id="text-area-test-data"
        style={{ width: 1175, height: 100, marginTop: 10 }}
        value={userFormTest}
      ></textarea>
    </Box>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Account Settings",
};
