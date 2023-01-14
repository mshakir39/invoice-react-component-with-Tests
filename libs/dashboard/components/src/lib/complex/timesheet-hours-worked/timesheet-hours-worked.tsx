import { Box, Grid } from "@mui/material";
import { GridMoreVertIcon } from "@mui/x-data-grid";
import { useEffect } from "react";
import { ITimesheetHoursWorkedProp } from "../../../constants/interfaces";

export const TimesheetHoursWorked = ({
  startDate,
  endDate,
  totalHoursWorked,
  hoursAvailable,
  onChangeHoursWorked,
}: ITimesheetHoursWorkedProp) => {
  useEffect(() => {
    onChangeHoursWorked &&
      onChangeHoursWorked({
        startDate,
        endDate,
        totalHoursWorked,
        hoursAvailable,
        utilizationRate: (totalHoursWorked / hoursAvailable) * 100,
      });
  }, [startDate, endDate, totalHoursWorked, hoursAvailable]);

  return (
    <Box id="timesheets-hours-worked">
      <Grid
        container
        sx={{
          padding: "15px 10px",
          background: "#f5e7d6",
          alignItems: "center",
        }}
      >
        <Grid item xs>
          Start Date
        </Grid>
        <Grid item xs>
          End Date
        </Grid>
        <Grid item xs>
          Hours Worked
        </Grid>
        <Grid item xs>
          Hours Available
        </Grid>
        <Grid item xs>
          Utilization Rate %
        </Grid>
        <Grid item xs={0.5}>
          <Box textAlign="right" paddingRight="16px">
            <GridMoreVertIcon
              sx={{
                color: "#6e6767",
                cursor: "pointer",
                textAlign: "right",
                paddingRight: "4px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ padding: "15px 10px" }}>
        <Grid item xs={2.3}>
          <span data-testid="start-date">{startDate}</span>
        </Grid>
        <Grid item xs={2.3}>
          <span data-testid="end-date">{endDate}</span>
        </Grid>
        <Grid item xs={2.3}>
          <span data-testid="total-hours-worked">{totalHoursWorked}</span>
        </Grid>
        <Grid item xs={2.3}>
          <span data-testid="hours-available">{hoursAvailable}</span>
        </Grid>
        <Grid item xs={2.3}>
          <span data-testid="utilization-rate">
            {((totalHoursWorked / hoursAvailable) * 100).toFixed(2)}
          </span>
        </Grid>
      </Grid>
    </Box>
  );
};
