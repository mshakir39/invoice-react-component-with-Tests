import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TimesheetNoteDialog } from "./timesheet-note-dialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";
export default {
  component: TimesheetNoteDialog,
} as ComponentMeta<typeof TimesheetNoteDialog>;

const Template: ComponentStory<typeof TimesheetNoteDialog> = (args) => {
  const [testData, setTestData] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button onClick={() => setOpen((preState) => !preState)}>
        Toggle dialog
      </Button>
      <TimesheetNoteDialog
        isOpen={open}
        onSubmitForm={(note) => {
          setTestData(JSON.stringify(note));
          setOpen(false);
        }}
        onClose={() => setOpen(false)}
        {...args}
      />
      <textarea
        id="text-area-test-data"
        style={{ width: "100%", height: 100, marginTop: 10 }}
        value={testData}
      ></textarea>
    </Box>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  startDate: "2022-12-19",
  title: "Add a Note",
};
