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
                  invoiceDate: "12 jan 2009",
                  terms: "No terms",
                  from: {
                    companyName: "no Name",
                    streetAddress: "no address",
                    city: "none",
                    state: "no state",
                    zip: "232323",
                    number: "098908098",
                  },
                  invoiceFor: {
                    companyName: "no Name",
                    streetAddress: "no address",
                    city: "none",
                    state: "no state",
                    zip: "232323",
                    number: "098908098",
                  },
                  projectName: "Project zero",
                  taxRate: 10,
                  invoiceData: [
                    {
                      description: "item1",
                      qty: 10,
                      price: 20,
                    },
                    {
                      description: "item2",
                      qty: 20,
                      price: 40,
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
