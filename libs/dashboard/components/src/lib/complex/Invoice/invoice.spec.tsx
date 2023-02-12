import { render } from "@testing-library/react";
import Invoice from "./invoice";
function getValueByPercentage(percent: any, originalValue: any) {
  return (percent / 100) * originalValue;
}
describe("Invoice Component", () => {
  const response = {
    invoiceNum: "12345",
    invoiceDate: "06/09/2020",
    invoiceLogo: "asdas",
    terms: "Net 30",
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
    from: {
      companyName: "Creative Solutions Co.",
      streetAddress: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10005",
    },
    invoiceFor: {
      companyName: "Creative Solutions Coo.",
      streetAddress: "123 Main Stt",
      city: "New Yorkk",
      state: "Ny",
      zip: "100055",
    },
    projectName: "Test Project",
  };

  it("should render with the appropriate data", () => {
    const { getByText, baseElement, getAllByText } = render(
      <Invoice id="pdf" data={response} />
    );

    expect(getByText(response.invoiceNum)?.textContent).toContain(
      response.invoiceNum
    );
    expect(getByText(response.invoiceDate)?.textContent).toContain(
      response.invoiceDate
    );
    expect(getByText(response.terms)?.textContent).toContain(response.terms);
    expect(getByText(response.from.companyName)?.textContent).toContain(
      response.from.companyName
    );
    expect(getByText(response.from.streetAddress)?.textContent).toContain(
      response.from.streetAddress
    );
    expect(getAllByText(response.projectName)?.length).toBe(2);

    expect(baseElement).toBeTruthy();
  });
});
test("Returns expected value when given percentage", () => {
  const originalValue = 600;
  const result1 = getValueByPercentage(25, originalValue);
  expect(result1).toBe(150);

  const result2 = getValueByPercentage(75, originalValue);
  expect(result2).toBe(450);
});
