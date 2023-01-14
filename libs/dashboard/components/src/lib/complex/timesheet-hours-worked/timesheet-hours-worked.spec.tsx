import { render, screen } from "@testing-library/react";
import { TimesheetHoursWorked } from "./timesheet-hours-worked";

describe("Timesheet Hours Worked", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <TimesheetHoursWorked
        startDate="2022-12-19"
        endDate="2022-12-25"
        totalHoursWorked={32}
        hoursAvailable={40}
      />
    );

    const hourWorkedElement = baseElement.querySelector(
      "#timesheets-hours-worked"
    );

    expect(hourWorkedElement?.textContent).toContain("Start Date");
    expect(hourWorkedElement?.textContent).toContain("End Date");
    expect(hourWorkedElement?.textContent).toContain("Hours Worked");
    expect(hourWorkedElement?.textContent).toContain("Hours Available");
    expect(hourWorkedElement?.textContent).toContain("Utilization Rate %");
    expect(baseElement).toBeTruthy();
  });
  it("should display hours worked value", () => {
    render(
      <TimesheetHoursWorked
        startDate="2022-12-19"
        endDate="2022-12-25"
        totalHoursWorked={32}
        hoursAvailable={40}
      />
    );

    const startDate = screen.getByTestId("start-date");
    const endDate = screen.getByTestId("end-date");
    const totalHoursWorked = screen.getByTestId("total-hours-worked");
    const hoursAvailable = screen.getByTestId("hours-available");
    const utilizationRate = screen.getByTestId("utilization-rate");

    expect(startDate?.textContent).toContain("2022-12-19");
    expect(endDate?.textContent).toContain("2022-12-25");
    expect(totalHoursWorked?.textContent).toContain("32");
    expect(hoursAvailable?.textContent).toContain("40");
    expect(utilizationRate?.textContent).toContain("80.00");
  });
});
