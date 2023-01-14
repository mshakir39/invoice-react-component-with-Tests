import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { TimesheetHoursWorked } from "./timesheet-hours-worked";

export default {
  component: TimesheetHoursWorked,
} as ComponentMeta<typeof TimesheetHoursWorked>;

const Template: ComponentStory<typeof TimesheetHoursWorked> = (args) => {
  const [testData, setTestData] = useState("");

  return (
    <>
      <TimesheetHoursWorked
        {...args}
        onChangeHoursWorked={(e) => setTestData(JSON.stringify(e))}
      />
      <textarea
        id="text-area-test-data"
        style={{ width: "100%", height: 100, marginTop: 10 }}
        value={testData}
      ></textarea>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  startDate: "2022-12-19",
  endDate: "2022-12-25",
  totalHoursWorked: 32,
  hoursAvailable: 40,
};
