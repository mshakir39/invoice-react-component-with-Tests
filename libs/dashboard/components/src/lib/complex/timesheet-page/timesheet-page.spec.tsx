import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { TimesheetsPage } from "./timesheet-page";

import { initMockTransport } from "@cupola/transporter";

describe("Timesheets Page", () => {
  const transporter = initMockTransport();
  const updateTimesheetMock = jest.fn();

  beforeEach(() => {
    transporter.cupola.timesheet.updateTimesheet = updateTimesheetMock;
    jest.clearAllMocks();
  });
  it("should render successfully", async () => {
    render(
      <TimesheetsPage
        onChangeTimesheetEntries={(e: string) => updateTimesheetMock(e)}
      />
    );
    await waitFor(() => {
      //before update
      expect(screen.getByTestId("total-hours-worked")?.textContent).toEqual(
        "31"
      );
      expect(screen.getByTestId("utilization-rate")?.textContent).toEqual(
        "77.50"
      );
      expect(transporter.cupola.timesheet.updateTimesheet).toBeCalledTimes(1);
      expect(updateTimesheetMock).toBeCalledWith(
        `[{"id":1,"PhaseName":"Project1","Monday":{"date":"","hours":4.5,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":3,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Thursday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Friday":{"date":"","hours":2,"minutes":0,"notes":""},"Saturday":{"date":"","hours":2,"minutes":0,"notes":""},"Sunday":{"date":"","hours":3,"minutes":0,"notes":""},"TotalHours":17.5,"Type":0,"PhaseOfProject":""},{"id":2,"PhaseName":"Overhead","Monday":{"date":"2022-12-19","hours":2,"minutes":0,"notes":"check timesheet"},"Tuesday":{"date":"2022-12-20","hours":1,"minutes":0,"notes":"fill time"},"Wednesday":{"date":"2022-12-21","hours":0.5,"minutes":30,"notes":""},"Thursday":{"date":"2022-12-22","hours":0,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":1,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":1,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":1,"minutes":0,"notes":""},"TotalHours":6.5,"Type":1,"PhaseOfProject":"Project1"},{"id":3,"PhaseName":"Pre Design","Monday":{"date":"2022-12-19","hours":1,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":0,"minutes":0,"notes":""},"Wednesday":{"date":"2022-12-21","hours":0,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":1,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":1,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":0,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":1,"minutes":0,"notes":""},"TotalHours":4,"Type":1,"PhaseOfProject":"Project1"},{"id":4,"PhaseName":"Schematic Design","Monday":{"date":"2022-12-19","hours":0.5,"minutes":30,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1,"minutes":0,"notes":""},"Wednesday":{"date":"2022-12-21","hours":0,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":0,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":0,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":0,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":0.5,"minutes":30,"notes":""},"TotalHours":2,"Type":1,"PhaseOfProject":"Project1"},{"id":5,"PhaseName":"Add a Phase","Monday":{"date":"2022-12-19","hours":1,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1,"minutes":0,"notes":""},"Wednesday":{"date":"2022-12-21","hours":1,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":0.5,"minutes":30,"notes":""},"Friday":{"date":"2022-12-23","hours":0,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":1,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":0.5,"minutes":30,"notes":""},"TotalHours":5,"Type":1,"PhaseOfProject":"Project1"},{"id":6,"PhaseName":"Project2","Monday":{"date":"","hours":0,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":4,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":1,"minutes":0,"notes":""},"Thursday":{"date":"","hours":2,"minutes":0,"notes":""},"Friday":{"date":"","hours":1,"minutes":0,"notes":""},"Saturday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Sunday":{"date":"","hours":4,"minutes":0,"notes":""},"TotalHours":13.5,"Type":0,"PhaseOfProject":""},{"id":7,"PhaseName":"Overhead","Monday":{"date":"2022-12-19","hours":0,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1.5,"minutes":30,"notes":""},"Wednesday":{"date":"2022-12-21","hours":0,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":1,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":0,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":1,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":1,"minutes":0,"notes":""},"TotalHours":4.5,"Type":1,"PhaseOfProject":"Project2"},{"id":8,"PhaseName":"Pre Design","Monday":{"date":"2022-12-19","hours":0,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1.5,"minutes":30,"notes":""},"Wednesday":{"date":"2022-12-21","hours":0,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":1,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":0,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":0.5,"minutes":30,"notes":""},"Sunday":{"date":"2022-12-25","hours":3,"minutes":0,"notes":""},"TotalHours":6,"Type":1,"PhaseOfProject":"Project2"},{"id":9,"PhaseName":"Schematic Design","Monday":{"date":"2022-12-19","hours":0,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1,"minutes":0,"notes":""},"Wednesday":{"date":"2022-12-21","hours":1,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":0,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":1,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":0,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":0,"minutes":0,"notes":""},"TotalHours":3,"Type":1,"PhaseOfProject":"Project2"},{"id":10,"PhaseName":"Total # Hours","Monday":{"date":"","hours":4.5,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":7,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Thursday":{"date":"","hours":3.5,"minutes":0,"notes":""},"Friday":{"date":"","hours":3,"minutes":0,"notes":""},"Saturday":{"date":"","hours":3.5,"minutes":0,"notes":""},"Sunday":{"date":"","hours":7,"minutes":0,"notes":""},"TotalHours":31,"Type":2,"PhaseOfProject":""}]`
      );
    });
  });

  it("should update timesheet", async () => {
    const { baseElement } = render(
      <TimesheetsPage
        onChangeTimesheetEntries={(e: string) => updateTimesheetMock(e)}
      />
    );
    await waitFor(() => {
      // updating
      const getTabItem = baseElement.querySelector(
        '[data-id="2"] > [data-field="Monday"]'
      );
      getTabItem && fireEvent.dblClick(getTabItem);
      const getEntry = baseElement.querySelector(
        '[data-id="2"] > [data-field="Monday"] input'
      );
      getEntry &&
        fireEvent.change(getEntry, {
          target: { value: "5" },
        });
      getEntry && fireEvent.keyDown(getEntry, { key: "Enter", charCode: 13 });
      // after update
      expect(updateTimesheetMock).toBeCalled();
      expect(screen.getByTestId("total-hours-worked")?.textContent).toEqual(
        "34"
      );
      expect(screen.getByTestId("utilization-rate")?.textContent).toEqual(
        "85.00"
      );
      expect(updateTimesheetMock).toBeCalledWith(
        `[{"id":1,"PhaseName":"Project1","Monday":{"date":"","hours":7.5,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":3,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Thursday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Friday":{"date":"","hours":2,"minutes":0,"notes":""},"Saturday":{"date":"","hours":2,"minutes":0,"notes":""},"Sunday":{"date":"","hours":3,"minutes":0,"notes":""},"TotalHours":20.5,"Type":0,"PhaseOfProject":""},{"id":2,"PhaseName":"Overhead","Monday":{"date":"2022-12-19","hours":5,"minutes":0,"notes":"check timesheet"},"Tuesday":{"date":"2022-12-20","hours":1,"minutes":0,"notes":"fill time"},"Wednesday":{"date":"2022-12-21","hours":0.5,"minutes":30,"notes":""},"Thursday":{"date":"2022-12-22","hours":0,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":1,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":1,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":1,"minutes":0,"notes":""},"TotalHours":9.5,"Type":1,"PhaseOfProject":"Project1"},{"id":3,"PhaseName":"Pre Design","Monday":{"date":"2022-12-19","hours":1,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":0,"minutes":0,"notes":""},"Wednesday":{"date":"2022-12-21","hours":0,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":1,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":1,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":0,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":1,"minutes":0,"notes":""},"TotalHours":4,"Type":1,"PhaseOfProject":"Project1"},{"id":4,"PhaseName":"Schematic Design","Monday":{"date":"2022-12-19","hours":0.5,"minutes":30,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1,"minutes":0,"notes":""},"Wednesday":{"date":"2022-12-21","hours":0,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":0,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":0,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":0,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":0.5,"minutes":30,"notes":""},"TotalHours":2,"Type":1,"PhaseOfProject":"Project1"},{"id":5,"PhaseName":"Add a Phase","Monday":{"date":"2022-12-19","hours":1,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1,"minutes":0,"notes":""},"Wednesday":{"date":"2022-12-21","hours":1,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":0.5,"minutes":30,"notes":""},"Friday":{"date":"2022-12-23","hours":0,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":1,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":0.5,"minutes":30,"notes":""},"TotalHours":5,"Type":1,"PhaseOfProject":"Project1"},{"id":6,"PhaseName":"Project2","Monday":{"date":"","hours":0,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":4,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":1,"minutes":0,"notes":""},"Thursday":{"date":"","hours":2,"minutes":0,"notes":""},"Friday":{"date":"","hours":1,"minutes":0,"notes":""},"Saturday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Sunday":{"date":"","hours":4,"minutes":0,"notes":""},"TotalHours":13.5,"Type":0,"PhaseOfProject":""},{"id":7,"PhaseName":"Overhead","Monday":{"date":"2022-12-19","hours":0,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1.5,"minutes":30,"notes":""},"Wednesday":{"date":"2022-12-21","hours":0,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":1,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":0,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":1,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":1,"minutes":0,"notes":""},"TotalHours":4.5,"Type":1,"PhaseOfProject":"Project2"},{"id":8,"PhaseName":"Pre Design","Monday":{"date":"2022-12-19","hours":0,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1.5,"minutes":30,"notes":""},"Wednesday":{"date":"2022-12-21","hours":0,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":1,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":0,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":0.5,"minutes":30,"notes":""},"Sunday":{"date":"2022-12-25","hours":3,"minutes":0,"notes":""},"TotalHours":6,"Type":1,"PhaseOfProject":"Project2"},{"id":9,"PhaseName":"Schematic Design","Monday":{"date":"2022-12-19","hours":0,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1,"minutes":0,"notes":""},"Wednesday":{"date":"2022-12-21","hours":1,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":0,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":1,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":0,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":0,"minutes":0,"notes":""},"TotalHours":3,"Type":1,"PhaseOfProject":"Project2"},{"id":10,"PhaseName":"Total # Hours","Monday":{"date":"","hours":7.5,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":7,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Thursday":{"date":"","hours":3.5,"minutes":0,"notes":""},"Friday":{"date":"","hours":3,"minutes":0,"notes":""},"Saturday":{"date":"","hours":3.5,"minutes":0,"notes":""},"Sunday":{"date":"","hours":7,"minutes":0,"notes":""},"TotalHours":34,"Type":2,"PhaseOfProject":""}]`
      );
    });
  });

  it("should submit note dialog", async () => {
    const { baseElement } = render(
      <TimesheetsPage
        onChangeTimesheetEntries={(e: string) => updateTimesheetMock(e)}
      />
    );

    fireEvent.click(screen.getByTestId("AddIcon"));

    const date = baseElement.querySelector(
      '[data-testid="date-notes-text-field"] input'
    );

    const selectProject = screen
      .getByTestId("select-project")
      .querySelector("input");
    const selectPhase = screen
      .getByTestId("select-phase")
      .querySelector("input");
    const note = baseElement.querySelector('[data-testid="note-input"] input');

    // input date
    date &&
      fireEvent.change(date, {
        target: { value: "12/19/2022" },
      });

    // select project
    selectProject &&
      fireEvent.change(selectProject, {
        target: { value: "Project1" },
      });
    const chooseProject = baseElement.querySelector(
      '.MuiAutocomplete-popper li[data-option-index="0"]'
    );
    chooseProject && fireEvent.click(chooseProject);

    // select phase
    selectPhase &&
      fireEvent.change(selectPhase, {
        target: { value: "Overhead" },
      });
    const choosePhase = baseElement.querySelector(
      '.MuiAutocomplete-popper li[data-option-index="0"]'
    );
    choosePhase && fireEvent.click(choosePhase);
    // input note
    note &&
      fireEvent.change(note, {
        target: { value: "adding notes test" },
      });
    await waitFor(() => {
      const submitBtn = baseElement.querySelector(
        "[role='dialog'] [type='submit']"
      );
      // submit
      submitBtn && fireEvent.click(submitBtn);

      expect(transporter.cupola.timesheet.updateTimesheet).toBeCalledTimes(1);
      expect(updateTimesheetMock.mock.calls[0][0]).toBe(
        `[{"id":1,"PhaseName":"Project1","Monday":{"date":"","hours":4.5,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":3,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Thursday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Friday":{"date":"","hours":2,"minutes":0,"notes":""},"Saturday":{"date":"","hours":2,"minutes":0,"notes":""},"Sunday":{"date":"","hours":3,"minutes":0,"notes":""},"TotalHours":17.5,"Type":0,"PhaseOfProject":""},{"id":2,"PhaseName":"Overhead","Monday":{"date":"2022-12-19","hours":2,"minutes":0,"notes":"adding notes test"},"Tuesday":{"date":"2022-12-20","hours":1,"minutes":0,"notes":"fill time"},"Wednesday":{"date":"2022-12-21","hours":0.5,"minutes":30,"notes":""},"Thursday":{"date":"2022-12-22","hours":0,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":1,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":1,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":1,"minutes":0,"notes":""},"TotalHours":6.5,"Type":1,"PhaseOfProject":"Project1"},{"id":3,"PhaseName":"Pre Design","Monday":{"date":"2022-12-19","hours":1,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":0,"minutes":0,"notes":""},"Wednesday":{"date":"2022-12-21","hours":0,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":1,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":1,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":0,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":1,"minutes":0,"notes":""},"TotalHours":4,"Type":1,"PhaseOfProject":"Project1"},{"id":4,"PhaseName":"Schematic Design","Monday":{"date":"2022-12-19","hours":0.5,"minutes":30,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1,"minutes":0,"notes":""},"Wednesday":{"date":"2022-12-21","hours":0,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":0,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":0,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":0,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":0.5,"minutes":30,"notes":""},"TotalHours":2,"Type":1,"PhaseOfProject":"Project1"},{"id":5,"PhaseName":"Add a Phase","Monday":{"date":"2022-12-19","hours":1,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1,"minutes":0,"notes":""},"Wednesday":{"date":"2022-12-21","hours":1,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":0.5,"minutes":30,"notes":""},"Friday":{"date":"2022-12-23","hours":0,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":1,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":0.5,"minutes":30,"notes":""},"TotalHours":5,"Type":1,"PhaseOfProject":"Project1"},{"id":6,"PhaseName":"Project2","Monday":{"date":"","hours":0,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":4,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":1,"minutes":0,"notes":""},"Thursday":{"date":"","hours":2,"minutes":0,"notes":""},"Friday":{"date":"","hours":1,"minutes":0,"notes":""},"Saturday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Sunday":{"date":"","hours":4,"minutes":0,"notes":""},"TotalHours":13.5,"Type":0,"PhaseOfProject":""},{"id":7,"PhaseName":"Overhead","Monday":{"date":"2022-12-19","hours":0,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1.5,"minutes":30,"notes":""},"Wednesday":{"date":"2022-12-21","hours":0,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":1,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":0,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":1,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":1,"minutes":0,"notes":""},"TotalHours":4.5,"Type":1,"PhaseOfProject":"Project2"},{"id":8,"PhaseName":"Pre Design","Monday":{"date":"2022-12-19","hours":0,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1.5,"minutes":30,"notes":""},"Wednesday":{"date":"2022-12-21","hours":0,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":1,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":0,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":0.5,"minutes":30,"notes":""},"Sunday":{"date":"2022-12-25","hours":3,"minutes":0,"notes":""},"TotalHours":6,"Type":1,"PhaseOfProject":"Project2"},{"id":9,"PhaseName":"Schematic Design","Monday":{"date":"2022-12-19","hours":0,"minutes":0,"notes":""},"Tuesday":{"date":"2022-12-20","hours":1,"minutes":0,"notes":""},"Wednesday":{"date":"2022-12-21","hours":1,"minutes":0,"notes":""},"Thursday":{"date":"2022-12-22","hours":0,"minutes":0,"notes":""},"Friday":{"date":"2022-12-23","hours":1,"minutes":0,"notes":""},"Saturday":{"date":"2022-12-24","hours":0,"minutes":0,"notes":""},"Sunday":{"date":"2022-12-25","hours":0,"minutes":0,"notes":""},"TotalHours":3,"Type":1,"PhaseOfProject":"Project2"},{"id":10,"PhaseName":"Total # Hours","Monday":{"date":"","hours":4.5,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":7,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Thursday":{"date":"","hours":3.5,"minutes":0,"notes":""},"Friday":{"date":"","hours":3,"minutes":0,"notes":""},"Saturday":{"date":"","hours":3.5,"minutes":0,"notes":""},"Sunday":{"date":"","hours":7,"minutes":0,"notes":""},"TotalHours":31,"Type":2,"PhaseOfProject":""}]`
      );
    });
  });
});
