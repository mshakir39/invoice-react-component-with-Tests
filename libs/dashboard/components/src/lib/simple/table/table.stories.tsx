import { GridColDef } from "@mui/x-data-grid";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./table";
import { IReactTable } from "./table";

const columns: GridColDef[] = [
  {
    field: "employeeName",
    headerName: "Employee Name",
    width: 130,
    renderCell: (row) => (
      <span title={row.row.employeeName}>{row.row.employeeName}</span>
    ),
  },
  {
    field: "role",
    headerName: "Role",
    width: 100,

    renderCell: (row) => <span title={row.row.role}>{row.row.role}</span>,
  },
  {
    field: "email",
    headerName: "Email",
    width: 100,
    renderCell: (row) => <span title={row.row.email}>{row.row.email}</span>,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    type: "number",
    width: 130,
    sortable: true,
    renderCell: (row) => (
      <span title={row.row.phoneNumber}>{row.row.phoneNumber}</span>
    ),
  },
  {
    field: "weeklyTargetBillingHours",
    headerName: "Weekly Target Billing Hours",
    sortable: true,
    width: 160,
  },
  {
    field: "vacationDayAllowance",
    headerName: "Vacation Day Allowance",
    sortable: true,
    width: 160,
  },
  {
    field: "sickDayAllowance",
    headerName: "Sick Day Allowance",
    sortable: true,
    width: 160,
  },
  {
    field: "billingRate",
    headerName: "Billing Rate",
    sortable: true,
    width: 90,
  },
  {
    field: "costRate",
    headerName: "Cost Rate",
    sortable: true,
    width: 90,
  },
];

export default {
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args: IReactTable) => (
  <Table {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  columns: columns,
  tableData: [
    {
      id: "0",
      employeeName: "Muzamil",
      role: "Manager",
      email: "mshakir39@gmail.com",
      phoneNumber: "1212-122-1212",
      weeklyTargetBillingHours: "12",
      vacationDayAllowance: "21",
      sickDayAllowance: "21",
      billingRate: "12",
      costRate: "32",
    },
    {
      id: "1",
      employeeName: "Muzasasamil",
      role: "Manager",
      email: "mshakir39@gmail.com",
      phoneNumber: "1212-122-1212",
      weeklyTargetBillingHours: "12",
      vacationDayAllowance: "21",
      sickDayAllowance: "21",
      billingRate: "12",
      costRate: "32",
    },
  ],
};
