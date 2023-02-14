import { AxiosResponse } from "axios";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { PrintInvoice } from "../print-invoice/print-invoice";
jest.mock("@cupola/transporter", () => {
  return {
    initMockTransport: () => ({
      cupola: {
        invoice: {
          get: () => {
            return new Promise<AxiosResponse>((resolve) =>
              resolve({
                data: {
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
        },
      },
    }),
  };
});

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
});
