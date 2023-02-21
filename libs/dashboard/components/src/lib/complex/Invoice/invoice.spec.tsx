import { render } from "@testing-library/react";
import Invoice from "./invoice";
function getValueByPercentage(percent: number, originalValue: number) {
  return (percent / 100) * originalValue;
}
describe("Invoice Component", () => {
  const response = {
    type: "standard",
    invoiceNum: "#672368",
    invoiceDate: new Date().toLocaleDateString(),
    invoiceLogo: "asdas",
    terms: "no terms",
    invoiceData: [
      {
        description: "Private Desk",
        qty: 10,
        price: 20,
      },
    ],
    from: {
      companyName: "Capula Saofware",
      streetAddress: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10005",
      number: "(555) 555-1234",
    },
    invoiceFor: {
      companyName: "Global Solutions",
      streetAddress: "24 Belmont St.",
      city: "Lancaster",
      state: "CA ",
      zip: "93535",
      number: "(555) 555-1212",
    },
    projectName: "Test Project",
    notes: "",
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
