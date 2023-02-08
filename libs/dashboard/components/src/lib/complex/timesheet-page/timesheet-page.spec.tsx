import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { TimesheetsPage } from "./timesheet-page";
import { AxiosResponse } from "axios";

import { ProjectEntity, TimesheetEntryEntity } from "@cupola/types";

jest.mock("@cupola/transporter", () => {
  return {
    initMockTransport: () => ({
      cupola: {
        timesheet: {
          get: (startDate: string, endDate: string) => {
            return new Promise<AxiosResponse>((resolve) =>
              resolve({
                data: [
                  { 
                    date: "2022-12-19",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Overhead",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-20",
                    hours: 0,
                    minutes: 30,
                    notes: "",
                    phase: "Overhead",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-21",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Overhead",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-22",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Overhead",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-23",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Overhead",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-24",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Overhead",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-25",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Overhead",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-19",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-20",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-21",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-22",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-23",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-24",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-25",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-19",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-20",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-21",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-22",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-23",
                    hours: 2,
                    minutes: 0,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-24",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-25",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-19",
                    hours: 0,
                    minutes: 30,
                    notes: "",
                    phase: "Add a Phase",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-20",
                    hours: 0,
                    minutes: 30,
                    notes: "",
                    phase: "Add a Phase",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-21",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Add a Phase",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-22",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Add a Phase",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-23",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Add a Phase",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-24",
                    hours: 0,
                    minutes: 30,
                    notes: "",
                    phase: "Add a Phase",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-25",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Add a Phase",
                    projectId: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                  },
                  {
                    date: "2022-12-19",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Overhead",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-20",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Overhead",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-21",
                    hours: 0,
                    minutes: 30,
                    notes: "",
                    phase: "Overhead",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-22",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Overhead",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-23",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Overhead",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-24",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Overhead",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-25",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Overhead",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-19",
                    hours: 0,
                    minutes: 30,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-20",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-21",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-22",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-23",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-24",
                    hours: 0,
                    minutes: 30,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-25",
                    hours: 0,
                    minutes: 0,
                    notes: "",
                    phase: "Pre Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-19",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-20",
                    hours: 0,
                    minutes: 30,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-21",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-22",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-23",
                    hours: 1,
                    minutes: 0,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-24",
                    hours: 2,
                    minutes: 0,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                  {
                    date: "2022-12-25",
                    hours: 2,
                    minutes: 0,
                    notes: "",
                    phase: "Schematic Design",
                    projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                  },
                ],
                status: 200,
                statusText: "OK",
                headers: {
                  ContentLocation: `/timesheet}`,
                },
                config: {},
              })
            );
          },
          post: (
            date: Date,
            hours: number,
            minutes: number,
            projectId: string,
            notes: string,
            phase: string
          ): Promise<AxiosResponse<Partial<TimesheetEntryEntity>>> => {
            return new Promise<AxiosResponse>((resolve) =>
              resolve({
                data: {
                  date: date,
                  hours: hours,
                  minutes: minutes,
                  notes: notes,
                  phase: phase,
                  projectId: projectId,
                },
                status: 201,
                statusText: "OK",
                headers: {
                  ContentLocation: `/timesheet}`,
                },
                config: {},
              })
            );
          },
        },
        project: {
          getAll: (filter?: Partial<ProjectEntity>): Promise<AxiosResponse> => {
            return new Promise<AxiosResponse>((resolve) =>
              resolve({
                data: [
                  {
                    id: "553f8fab-ec03-47ef-9000-9ac05cd1a689",
                    name: "Project1",
                  },
                  {
                    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                    name: "Project2",
                  },
                ],
                status: 201,
                statusText: "OK",
                headers: {
                  ContentLocation: `/timesheet`,
                },
                config: {},
              })
            );
          },
        },
      },
    }),
  };
});
describe("Timesheets Page", () => {
  const updateTimesheetMock = jest.fn();

  beforeEach(() => {
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
      expect(updateTimesheetMock).toBeCalledTimes(1);
      expect(updateTimesheetMock).toBeCalledWith(
        `[{"id":1,"PhaseName":"Project1","Monday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":1,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":1,"minutes":0,"notes":""},"Thursday":{"date":"","hours":3,"minutes":0,"notes":""},"Friday":{"date":"","hours":4,"minutes":0,"notes":""},"Saturday":{"date":"","hours":0.5,"minutes":0,"notes":""},"Sunday":{"date":"","hours":3,"minutes":0,"notes":""},"TotalHours":15,"Type":0,"PhaseOfProject":""},{"id":2,"PhaseName":"Overhead","Monday":{"date":"2022-12-19","notes":"","hours":0,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0.5,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":1,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":1,"minutes":0},"TotalHours":3.5,"Type":1,"PhaseOfProject":"Project1"},{"id":3,"PhaseName":"Pre Design","Monday":{"date":"2022-12-19","notes":"","hours":1,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":1,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":0,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":1,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":0,"minutes":0},"TotalHours":3,"Type":1,"PhaseOfProject":"Project1"},{"id":4,"PhaseName":"Schematic Design","Monday":{"date":"2022-12-19","notes":"","hours":1,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":2,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":1,"minutes":0},"TotalHours":5,"Type":1,"PhaseOfProject":"Project1"},{"id":5,"PhaseName":"Add a Phase","Monday":{"date":"2022-12-19","notes":"","hours":0.5,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0.5,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":0,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0.5,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":1,"minutes":0},"TotalHours":3.5,"Type":1,"PhaseOfProject":"Project1"},{"id":6,"PhaseName":"Project2","Monday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Thursday":{"date":"","hours":3,"minutes":0,"notes":""},"Friday":{"date":"","hours":2,"minutes":0,"notes":""},"Saturday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Sunday":{"date":"","hours":3,"minutes":0,"notes":""},"TotalHours":16,"Type":0,"PhaseOfProject":""},{"id":7,"PhaseName":"Overhead","Monday":{"date":"2022-12-19","notes":"","hours":0,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":1,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0.5,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":0,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":1,"minutes":0},"TotalHours":3.5,"Type":1,"PhaseOfProject":"Project2"},{"id":8,"PhaseName":"Pre Design","Monday":{"date":"2022-12-19","notes":"","hours":0.5,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":1,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":1,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0.5,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":0,"minutes":0},"TotalHours":4,"Type":1,"PhaseOfProject":"Project2"},{"id":9,"PhaseName":"Schematic Design","Monday":{"date":"2022-12-19","notes":"","hours":1,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0.5,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":1,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":1,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":2,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":2,"minutes":0},"TotalHours":8.5,"Type":1,"PhaseOfProject":"Project2"},{"id":10,"PhaseName":"Total # Hours","Monday":{"date":"","hours":4,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":3.5,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Thursday":{"date":"","hours":6,"minutes":0,"notes":""},"Friday":{"date":"","hours":6,"minutes":0,"notes":""},"Saturday":{"date":"","hours":3,"minutes":0,"notes":""},"Sunday":{"date":"","hours":6,"minutes":0,"notes":""},"TotalHours":31,"Type":2,"PhaseOfProject":""}]`
      );
    });
  });

  it("should update timesheet", async () => {
    const { baseElement } = render(
      <TimesheetsPage
        onChangeTimesheetEntries={(e: string) => updateTimesheetMock(e)}
      />
    );
    await waitFor(async () => {
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
      // await waitFor(() => {
      // after update
      expect(updateTimesheetMock).toBeCalled();
      expect(screen.getByTestId("total-hours-worked")?.textContent).toEqual(
        "36"
      );
      expect(screen.getByTestId("utilization-rate")?.textContent).toEqual(
        "90.00"
      );
      expect(updateTimesheetMock).toBeCalledWith(
        `[{"id":1,"PhaseName":"Project1","Monday":{"date":"","hours":7.5,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":1,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":1,"minutes":0,"notes":""},"Thursday":{"date":"","hours":3,"minutes":0,"notes":""},"Friday":{"date":"","hours":4,"minutes":0,"notes":""},"Saturday":{"date":"","hours":0.5,"minutes":0,"notes":""},"Sunday":{"date":"","hours":3,"minutes":0,"notes":""},"TotalHours":20,"Type":0,"PhaseOfProject":""},{"id":2,"PhaseName":"Overhead","Monday":{"date":"2022-12-19","notes":"","hours":5,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0.5,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":1,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":1,"minutes":0},"TotalHours":8.5,"Type":1,"PhaseOfProject":"Project1"},{"id":3,"PhaseName":"Pre Design","Monday":{"date":"2022-12-19","notes":"","hours":1,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":1,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":0,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":1,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":0,"minutes":0},"TotalHours":3,"Type":1,"PhaseOfProject":"Project1"},{"id":4,"PhaseName":"Schematic Design","Monday":{"date":"2022-12-19","notes":"","hours":1,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":2,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":1,"minutes":0},"TotalHours":5,"Type":1,"PhaseOfProject":"Project1"},{"id":5,"PhaseName":"Add a Phase","Monday":{"date":"2022-12-19","notes":"","hours":0.5,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0.5,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":0,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0.5,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":1,"minutes":0},"TotalHours":3.5,"Type":1,"PhaseOfProject":"Project1"},{"id":6,"PhaseName":"Project2","Monday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Thursday":{"date":"","hours":3,"minutes":0,"notes":""},"Friday":{"date":"","hours":2,"minutes":0,"notes":""},"Saturday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Sunday":{"date":"","hours":3,"minutes":0,"notes":""},"TotalHours":16,"Type":0,"PhaseOfProject":""},{"id":7,"PhaseName":"Overhead","Monday":{"date":"2022-12-19","notes":"","hours":0,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":1,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0.5,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":0,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":1,"minutes":0},"TotalHours":3.5,"Type":1,"PhaseOfProject":"Project2"},{"id":8,"PhaseName":"Pre Design","Monday":{"date":"2022-12-19","notes":"","hours":0.5,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":1,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":1,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0.5,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":0,"minutes":0},"TotalHours":4,"Type":1,"PhaseOfProject":"Project2"},{"id":9,"PhaseName":"Schematic Design","Monday":{"date":"2022-12-19","notes":"","hours":1,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0.5,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":1,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":1,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":2,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":2,"minutes":0},"TotalHours":8.5,"Type":1,"PhaseOfProject":"Project2"},{"id":10,"PhaseName":"Total # Hours","Monday":{"date":"","hours":9,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":3.5,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Thursday":{"date":"","hours":6,"minutes":0,"notes":""},"Friday":{"date":"","hours":6,"minutes":0,"notes":""},"Saturday":{"date":"","hours":3,"minutes":0,"notes":""},"Sunday":{"date":"","hours":6,"minutes":0,"notes":""},"TotalHours":36,"Type":2,"PhaseOfProject":""}]`
      );
      // });
    });
  });

  it("should submit note dialog", async () => {
    const { baseElement } = render(
      <TimesheetsPage
        onChangeTimesheetEntries={(e: string) => updateTimesheetMock(e)}
      />
    );

    fireEvent.click(screen.getByTestId("AddIcon"));

    const selectProject = screen
      .getByTestId("select-project")
      .querySelector("input");
    const selectPhase = screen
      .getByTestId("select-phase")
      .querySelector("input");
    const note = baseElement.querySelector('[data-testid="note-input"] input');

    // input date
    fireEvent.click(screen.getByTestId("date-notes-text-field"));
    fireEvent.click(screen.getByTestId("PenIcon"));

    const date = baseElement.querySelector(
      ".MuiCalendarOrClockPicker-root input"
    );

    date &&
      fireEvent.change(date, {
        target: { value: "12/19/2022" },
      });

    fireEvent.click(screen.getByText("OK"));
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

      expect(updateTimesheetMock).toBeCalled();
      expect(updateTimesheetMock.mock.calls[1][0]).toBe(
        `[{"id":1,"PhaseName":"Project1","Monday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":1,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":1,"minutes":0,"notes":""},"Thursday":{"date":"","hours":3,"minutes":0,"notes":""},"Friday":{"date":"","hours":4,"minutes":0,"notes":""},"Saturday":{"date":"","hours":0.5,"minutes":0,"notes":""},"Sunday":{"date":"","hours":3,"minutes":0,"notes":""},"TotalHours":15,"Type":0,"PhaseOfProject":""},{"id":2,"PhaseName":"Overhead","Monday":{"date":"2022-12-19","hours":0,"minutes":0,"notes":"adding notes test"},"Tuesday":{"date":"2022-12-20","notes":"","hours":0.5,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":1,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":1,"minutes":0},"TotalHours":3.5,"Type":1,"PhaseOfProject":"Project1"},{"id":3,"PhaseName":"Pre Design","Monday":{"date":"2022-12-19","notes":"","hours":1,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":1,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":0,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":1,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":0,"minutes":0},"TotalHours":3,"Type":1,"PhaseOfProject":"Project1"},{"id":4,"PhaseName":"Schematic Design","Monday":{"date":"2022-12-19","notes":"","hours":1,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":2,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":1,"minutes":0},"TotalHours":5,"Type":1,"PhaseOfProject":"Project1"},{"id":5,"PhaseName":"Add a Phase","Monday":{"date":"2022-12-19","notes":"","hours":0.5,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0.5,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":0,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0.5,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":1,"minutes":0},"TotalHours":3.5,"Type":1,"PhaseOfProject":"Project1"},{"id":6,"PhaseName":"Project2","Monday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":1.5,"minutes":0,"notes":""},"Thursday":{"date":"","hours":3,"minutes":0,"notes":""},"Friday":{"date":"","hours":2,"minutes":0,"notes":""},"Saturday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Sunday":{"date":"","hours":3,"minutes":0,"notes":""},"TotalHours":16,"Type":0,"PhaseOfProject":""},{"id":7,"PhaseName":"Overhead","Monday":{"date":"2022-12-19","notes":"","hours":0,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":1,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0.5,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":0,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":1,"minutes":0},"TotalHours":3.5,"Type":1,"PhaseOfProject":"Project2"},{"id":8,"PhaseName":"Pre Design","Monday":{"date":"2022-12-19","notes":"","hours":0.5,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":1,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":0,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":1,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":0.5,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":0,"minutes":0},"TotalHours":4,"Type":1,"PhaseOfProject":"Project2"},{"id":9,"PhaseName":"Schematic Design","Monday":{"date":"2022-12-19","notes":"","hours":1,"minutes":0},"Tuesday":{"date":"2022-12-20","notes":"","hours":0.5,"minutes":0},"Wednesday":{"date":"2022-12-21","notes":"","hours":1,"minutes":0},"Thursday":{"date":"2022-12-22","notes":"","hours":1,"minutes":0},"Friday":{"date":"2022-12-23","notes":"","hours":1,"minutes":0},"Saturday":{"date":"2022-12-24","notes":"","hours":2,"minutes":0},"Sunday":{"date":"2022-12-25","notes":"","hours":2,"minutes":0},"TotalHours":8.5,"Type":1,"PhaseOfProject":"Project2"},{"id":10,"PhaseName":"Total # Hours","Monday":{"date":"","hours":4,"minutes":0,"notes":""},"Tuesday":{"date":"","hours":3.5,"minutes":0,"notes":""},"Wednesday":{"date":"","hours":2.5,"minutes":0,"notes":""},"Thursday":{"date":"","hours":6,"minutes":0,"notes":""},"Friday":{"date":"","hours":6,"minutes":0,"notes":""},"Saturday":{"date":"","hours":3,"minutes":0,"notes":""},"Sunday":{"date":"","hours":6,"minutes":0,"notes":""},"TotalHours":31,"Type":2,"PhaseOfProject":""}]`
      );
    });
  });
});
