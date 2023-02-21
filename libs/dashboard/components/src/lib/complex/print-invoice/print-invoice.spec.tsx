import { AxiosResponse } from "axios";
import {
  act,
  fireEvent,
  render,
  waitFor,
  screen,
} from "@testing-library/react";
import { PrintInvoice } from "../print-invoice/print-invoice";
import { InvoiceEntity } from "@cupola/types";
jest.mock("@cupola/transporter", () => {
  return {
    initMockTransport: () => ({
      cupola: {
        invoice: {
          get: () => {
            return new Promise<AxiosResponse>((resolve) =>
              resolve({
                data: {
                  type: "custom",
                  invoiceNum: "#482676",
                  invoiceDate: new Date().toLocaleDateString(),
                  terms: "No terms",
                  from: {
                    companyName: "Capula Saofware",
                    streetAddress: "123 Main St",
                    city: "New York",
                    state: "NY",
                    zip: "10005",
                    number: "(555) 555-1234",
                  },
                  invoiceFor: {
                    companyName: "Zingit Solutions",
                    streetAddress: "7893 Rockledge St.",
                    city: "San Diego",
                    state: "CA ",
                    zip: "92126",
                    number: "(555) 555-1232",
                  },
                  projectName: "Project zero",
                  taxRate: 10,
                  invoiceData: [
                    {
                      description: "Chairs",
                      qty: 10,
                      price: 20,
                    },
                  ],
                  notes: "not written yet",
                },
                status: 200,
                statusText: "OK",
                config: {},
                headers: {
                  ContentLocation: `/invoice}`,
                },
              })
            );
          },
          post: (
            type?: string,
            invoiceNum?: string,
            invoiceDate?: Date,
            terms?: string,
            from?: Record<string, string>,
            invoiceFor?: Record<string, string>,
            projectName?: string,
            taxRate?: number,
            invoiceData?: Array<Record<string, string>>,
            notes?: string
          ): Promise<AxiosResponse<Partial<InvoiceEntity>>> => {
            return new Promise<AxiosResponse>((resolve) =>
              resolve({
                data: {
                  type: type,
                  invoiceNum: invoiceNum,
                  invoiceDate: invoiceDate,
                  terms: terms,
                  from: from,
                  invoiceFor: invoiceFor,
                  projectName: projectName,
                  taxRate: taxRate,
                  invoiceData: invoiceData,
                  notes: notes,
                },
                status: 201,
                statusText: "OK",
                headers: {
                  ContentLocation: `/invoice}`,
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

const data = {
  type: "custom",
  invoiceNum: "#482676",
  invoiceDate: new Date().toLocaleDateString(),
  terms: "No terms",
  from: {
    companyName: "Capula Saofware",
    streetAddress: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10005",
    number: "(555) 555-1234",
  },
  invoiceFor: {
    companyName: "Zingit Solutions",
    streetAddress: "7893 Rockledge St.",
    city: "San Diego",
    state: "CA ",
    zip: "92126",
    number: "(555) 555-1232",
  },
  projectName: "Project zero",
  taxRate: 10,
  invoiceData: [
    {
      description: "Chairs",
      qty: 10,
      price: 20,
    },
  ],
  notes: "not written yet",
};
describe("Invoice component", () => {
  const getMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render successfully", async () => {
    const { container } = render(<PrintInvoice />);

    expect(container).toBeTruthy();

    act(() => {
      const button = container.getElementsByTagName("button")[0] as HTMLElement;

      expect(button).toBeTruthy();
      fireEvent.click(button);
    });

    (async function () {
      await waitFor(() => {
        expect(getMock).toBeCalledTimes(1);
      });
    })();

    const invoice = container.querySelector(
      "#invoice-container"
    ) as HTMLElement;

    expect(invoice).toBeTruthy();
  });

  it("should edit Row successfully", async () => {
    const { container } = render(<PrintInvoice data={data as any} />);

    expect(container).toBeTruthy();

    act(() => {
      const button = container.getElementsByTagName("button")[1] as HTMLElement;
      expect(button).toBeTruthy();
      fireEvent.click(button);
    });

    (async function () {
      await waitFor(() => {
        expect(getMock).toBeCalledTimes(1);
      });
    })();

    const tableRows = container.querySelectorAll<HTMLElement>("table tbody tr");
    const des = screen.getByTestId("1:description") as HTMLInputElement;
    const qty = screen.getByTestId("1:qty") as HTMLInputElement;
    const price = screen.getByTestId("1:price") as HTMLInputElement;

    fireEvent.change(des, { target: { value: "test" } });
    fireEvent.change(qty, { target: { value: "2" } });
    fireEvent.change(price, { target: { value: "2" } });

    expect(des?.value).toBe("test");
    expect(qty?.value).toBe("2");
    expect(price?.value).toBe("2");

    expect(tableRows).toHaveLength(7);

    act(() => {
      const rowDelete = container.getElementsByTagName("svg")[0] as SVGElement;
      expect(rowDelete).toBeTruthy();

      fireEvent.click(rowDelete);
    });

    expect(tableRows).toBeTruthy();
  });
});
