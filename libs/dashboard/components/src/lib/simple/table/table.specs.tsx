import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Table from "./table";
import { GridColDef } from "@mui/x-data-grid";

const dummyData = [
  {
    id: "0",
    employeeName: "Matt",
    role: "Manager",
  },
  {
    id: "1",
    employeeName: "Mark",
    role: "Manager",
  },
];

const columns: GridColDef[] = [
  {
    field: "employeeName",
    headerName: "Employee Name",
    width: 130,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderCell: (row: any) => (
      <span title={row.row.employeeName}>{row.row.employeeName}</span>
    ),
  },
  {
    field: "role",
    headerName: "Role",
    width: 100,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderCell: (row: any) => <span title={row.row.role}>{row.row.role}</span>,
  },
];

describe("Table", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Table columns={columns} tableData={dummyData} />
    );
    expect(baseElement).toBeInTheDocument();
  });
});
