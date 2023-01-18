import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { TimesheetNoteDialog } from "./timesheet-note-dialog";
import {
  initMockTransport,
} from "@cupola/transporter";
import { DateTime } from "luxon";

describe("Timesheet note dialog", () => {
  const transporter = initMockTransport();
  const timesheetsMock = jest.fn();

  beforeEach(() => {
    transporter.cupola.timesheet.updateNotes = timesheetsMock;
    jest.clearAllMocks();
  });

  it("should render successfully", () => {
    const { baseElement } = render(
      <TimesheetNoteDialog
        startDate={DateTime.fromFormat("2022-12-19", "yyyy-MM-dd")}
        title="Add a Note"
        isOpen={true}
        onSubmitForm={(note) => console.log(note)}
        onClose={() => console.log(false)}
      />
    );
    expect(baseElement.querySelector("h2")?.textContent).toBe("Add a Note");
    expect(baseElement).toBeTruthy();
  });

  it("should submit dialog form when clicking 'SAVE' button", async () => {
    const { baseElement } = render(
      <TimesheetNoteDialog
        startDate={DateTime.fromFormat("2022-12-19", "yyyy-MM-dd")}
        title="Add a Note"
        isOpen={true}
        onSubmitForm={(note) => timesheetsMock(note)}
        onClose={() => console.log(false)}
      />
    );

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

    date &&
      fireEvent.change(date, {
        target: { value: "01/01/2023" },
      });

    selectProject &&
      fireEvent.change(selectProject, {
        target: { value: "Project1" },
      });
    const chooseProject = baseElement.querySelector(
      '.MuiAutocomplete-popper li[data-option-index="0"]'
    );
    chooseProject && fireEvent.click(chooseProject);

    selectPhase &&
      fireEvent.change(selectPhase, {
        target: { value: "Overhead" },
      });

    const choosePhase = baseElement.querySelector(
      '.MuiAutocomplete-popper li[data-option-index="0"]'
    );
    choosePhase && fireEvent.click(choosePhase);

    note &&
      fireEvent.change(note, {
        target: { value: "note test" },
      });

    await waitFor(() => {
      fireEvent.click(screen.getByText("SAVE"));
      expect(transporter.cupola.timesheet.updateNotes).toBeCalledTimes(1);
      expect(timesheetsMock).toBeCalledWith(
        expect.objectContaining({
          date: "2023-01-01",
          notes: "note test",
          phase: "Overhead",
          project: "Project1",
        })
      );
    });
  });
});
