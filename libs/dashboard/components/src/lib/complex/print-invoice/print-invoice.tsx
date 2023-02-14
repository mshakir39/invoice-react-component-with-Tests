import { useEffect, useState } from "react";
import Invoice from "../Invoice/invoice";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Button from "../../simple/Button/button";
import { Transporter, initMockTransport } from "@cupola/transporter";

export const PrintInvoice = ({ data }: any) => {
  const [response, setResponse] = useState<any>();
  const [calls, setCalls] = useState<number>(0);

  const [apiTransport] = useState<Transporter>(
    initMockTransport() // If you want to use real-backend, please comment on this line
  );

  const handleDownloadPdf = async () => {
    try {
      await apiTransport.cupola.invoice.get().then(async (res) => {
        setResponse(res.data);
        setCalls(1);
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
    if (response && calls > 0) {
      afterSet();
    }
  }, [response]);

  useEffect(() => {
    if (data) setResponse(data);
  }, [data]);

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
