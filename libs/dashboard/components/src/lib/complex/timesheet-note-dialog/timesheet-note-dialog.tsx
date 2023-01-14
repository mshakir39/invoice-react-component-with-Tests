import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { FormEvent, useState } from "react";

import { initTransport, Transporter } from "@cupola/transporter";
import { useGlobalAppContext } from "../context/context";
import {
  ITimesheetNoteForm,
  ITimsheetNoteDialog,
} from "../../../constants/interfaces";

export const TimesheetNoteDialog = ({
  startDate,
  title,
  isOpen,
  onSubmitForm,
  onClose,
}: ITimsheetNoteDialog) => {
  const [noteForm, setNoteForm] = useState<ITimesheetNoteForm>({
    date: startDate,
    project: "",
    phase: "",
    notes: "",
  });

  const state = useGlobalAppContext();
  const [apiTransport] = useState<Transporter>(
    initTransport(() => state.apiHost || "")
  );

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data }: { data: ITimesheetNoteForm } =
        await apiTransport.cupola.timesheet.updateNotes({
          ...noteForm,
        });
      onSubmitForm(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (name: string, value: string) => {
    setNoteForm({ ...noteForm, [name]: value });
  };
  return (
    <Dialog
      data-testid="note-dialog"
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDialog-container": {
          alignItems: "flex-start",
        },
        "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          width: 360,
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmitForm}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={noteForm.date}
              onChange={(value) =>
                handleChangeInput("date", String(value === null ? "" : value))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  variant="outlined"
                  sx={(theme) => ({
                    label: {
                      color: theme.palette.text.primary,
                      marginTop: 1,
                    },
                    width: "100%",
                    height: "54px",
                  })}
                  data-testid={`date-notes-text-field`}
                  required={true}
                />
              )}
              data-testid={"date-note-picker"}
            />
          </LocalizationProvider>

          <Autocomplete
            data-testid={"select-project"}
            options={["Project1", "Project2"]}
            onChange={(e, value) =>
              handleChangeInput("project", String(value === null ? "" : value))
            }
            sx={{
              margin: "16px 0 8px",
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Project"
                variant="standard"
                required
              />
            )}
            isOptionEqualToValue={(option, value) =>
              value === undefined ||
              value === "" ||
              option === value ||
              value === "null"
            }
          />
          <Autocomplete
            data-testid={"select-phase"}
            options={[
              "Overhead",
              "Pre Design",
              "Schematic Design",
              "Add a Phase",
            ]}
            onChange={(e, value) =>
              handleChangeInput("phase", String(value === null ? "" : value))
            }
            sx={{
              margin: "16px 0 8px",
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Phase"
                variant="standard"
                required
              />
            )}
            isOptionEqualToValue={(option, value) =>
              value === undefined ||
              value === "" ||
              option === value ||
              value === "null"
            }
          />

          <TextField
            data-testid="note-input"
            label="Write a note"
            onChange={(e) => handleChangeInput("notes", e.target.value)}
            sx={{ marginTop: 5, width: "100%" }}
            required
          />
          <Box textAlign="right" marginTop={2}>
            <Button
              type="submit"
              sx={{
                background: "#ec650a",
                color: "black",
                fontWeight: 600,
                marginRight: 1,
                "&:hover": { background: "#ea711f" },
                borderRadius: 2,
                padding: "6px 12px",
              }}
            >
              SAVE
            </Button>
            <Button
              onClick={onClose}
              sx={{
                background: "#302828",
                color: "white",
                fontWeight: 600,
                "&:hover": { background: "#453a3a" },
                borderRadius: 2,
                padding: "6px 12px",
              }}
            >
              CANCEL
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};
