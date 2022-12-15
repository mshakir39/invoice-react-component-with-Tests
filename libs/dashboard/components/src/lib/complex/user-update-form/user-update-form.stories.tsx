import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserUpdateForm from "./user-update-form";
import { Box } from "@mui/material";
import { useState } from "react";
const userUpdateOnLoadForm = { email: "abc@gmail.com" };
export default {
  component: UserUpdateForm,
} as ComponentMeta<typeof UserUpdateForm>;

const Template: ComponentStory<typeof UserUpdateForm> = (args) => {
  const [userFormTest, setUserFormTest] = useState("");
  return (
    <Box>
      <UserUpdateForm
        onSubmitForm={(user) => setUserFormTest(JSON.stringify(user))}
        {...args}
      />
      <textarea
        id="text-area-test-data"
        style={{ width: "100%", height: 100, marginTop: 10 }}
        value={userFormTest}
      ></textarea>
    </Box>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  userUpdate: userUpdateOnLoadForm,
};
