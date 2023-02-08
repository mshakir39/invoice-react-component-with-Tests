import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { TimesheetNoteDialog } from "./timesheet-note-dialog";
import { DateTime } from "luxon";

describe("Timesheet note dialog", () => {
  const submitNotesMock = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render successfully", () => {
    const { baseElement } = render(
      <TimesheetNoteDialog
        startDate="12-19-2022"
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
        startDate="12-19-2022"
        title="Add a Note"
        isOpen={true}
        onSubmitForm={(note) => submitNotesMock(note)}
        onClose={() => console.log(false)}
      />
    );

    const selectProject = screen
      .getByTestId("select-project")
      .querySelector("input");
    const selectPhase = screen
      .getByTestId("select-phase")
      .querySelector("input");
    const note = baseElement.querySelector('[data-testid="note-input"] input');
    // type note date-picker
    fireEvent.click(screen.getByTestId("date-notes-text-field"));
    fireEvent.click(screen.getByTestId("PenIcon"));
    const date = baseElement.querySelector(
      ".MuiCalendarOrClockPicker-root input"
    );
    date &&
      fireEvent.change(date, {
        target: { value: "01/01/2023" },
      });
    fireEvent.click(screen.getByText("OK"));

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

    fireEvent.click(screen.getByText("SAVE"));
    await waitFor(() => {
      expect(submitNotesMock).toBeCalled();
      expect(submitNotesMock).toBeCalledWith(
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
