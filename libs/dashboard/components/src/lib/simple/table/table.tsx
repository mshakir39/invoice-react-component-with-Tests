import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export interface IReactTable {
  tableData: Array<object>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: Array<any>;
}
export const ReactTable: React.FC<IReactTable> = (props) => {
  const { tableData, columns, ...rest } = props;

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        {...rest}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu={true}
        isRowSelectable={() => false}
        autoHeight
        sx={[
          {
            "& .MuiDataGrid-columnHeaders": {
              background: "#f7ece2",
              outline: "none",
            },
          },
          {
            "& .MuiDataGrid-columnHeader:focus-within": {
              outline: "none",
            },
          },
          {
            "& .MuiDataGrid-cell": {
              border: "none",
            },
          },
          {
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
          },
          {
            "& .MuiDataGrid-row.Mui-selected ": {
              background: "transparent",
            },
          },
          {
            "& .MuiDataGrid-row.Mui-selected:hover ": {
              background: "transparent",
            },
          },
          {
            "& .MuiDataGrid-columnHeader--moving": {
              background: "transparent",
            },
          },
          {
            "& .MuiDataGrid-columnHeaderTitleContainer:focus": {
              outline: "none",
            },
          },
          {
            "& .MuiDataGrid-iconSeparator": {
              display: "none",
            },
          },
        ]}
      />
    </div>
  );
};

export default ReactTable;
