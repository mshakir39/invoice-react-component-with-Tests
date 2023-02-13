import { useEffect, useState } from "react";
import Invoice from "../Invoice/invoice";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Button from "../../simple/Button/button";
import { Transporter, initMockTransport } from "@cupola/transporter";

export const PrintInvoice = () => {
  const [response, setResponse] = useState<any>();
  const [apiTransport] = useState<Transporter>(
    initMockTransport() // If you want to use real-backend, please comment on this line
  );

  const handleDownloadPdf = async () => {
    try {
      await apiTransport.cupola.invoice.get().then(async (res) => {
        setResponse(res.data);
      });
    } catch {
      console.log("err");
    }
  };

  const afterSet = async () => {
    // Create a new instance of jsPDF for generating PDF output
    const pdf = new jsPDF("portrait", "pt", "a4");
    // Use html2canva to convert HTML element to canvas
    const data = await html2canvas(
      document.querySelector("#pdf") as HTMLElement
    );
    // Create an image object from canvas
    const img = data.toDataURL("image/png");
    // Get the width and height of the image
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    // Add the image to the PDF document
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    // Save the PDF Document
    const ID = response.invoiceNum.replace("#", "");
    console.log("ID", ID);
    pdf.save(`${response.invoiceFor["companyName"]}-invoice-${ID}.pdf`);
  };

  useEffect(() => {
    if (response) {
      afterSet();
    }
  }, [response]);

  return (
    <div data-testid="container">
      <Button
        onClick={handleDownloadPdf}
        id="downloadButton"
        label="Download"
        data-testid="downloadButton"
      ></Button>
      <Invoice id="pdf" data={response}></Invoice>
    </div>
  );
};

export default PrintInvoice;
