import { AxiosResponse } from "axios";

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
                headers: {
                  ContentLocation: `/timesheet}`,
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
