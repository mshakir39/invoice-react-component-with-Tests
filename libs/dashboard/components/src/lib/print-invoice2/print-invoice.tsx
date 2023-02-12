import React, { useEffect, useRef, useState } from "react";
// import MyButton from "../../simple/Button/button";
import Invoice from "../complex/Invoice/invoice";
// import ReactToPrint from "react-to-print";
import PrintProvider, { Print, NoPrint } from "react-easy-print";
// import { PDFDownloadLink } from "@react-pdf/renderer";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Button from "../simple/Button/button";
import { Transporter, initMockTransport } from "@cupola/transporter";
import MyButton from "../simple/Button/button";
export default function PrintInvoice() {
  const [response, setResponse] = useState<any>();
  const [apiTransport] = useState<Transporter>(
    initMockTransport() // If you want to use real-backend, please comment on this line
    // initTransport(() => state.apiHost || "") // TODO: use for real-backend (production)
  );
  // const printRef = React.useRef();

  const handleDownloadPdf = async () => {
    try {
      await apiTransport.cupola.invoice.get().then(async (res) => {
        setResponse(res.data);
        console.log("data", res.data);
      });
    } catch {
      console.log("err");
    }
  };

  // const afterSet = async () => {
  //   const pdf = new jsPDF("portrait", "pt", "a4");
  //   const data = await html2canvas(
  //     document.querySelector("#pdf") as HTMLElement
  //   );
  //   const img = data.toDataURL("image/png");
  //   const imgProperties = pdf.getImageProperties(img);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
  //   console.log("pdfWidth", pdfWidth, pdfHeight);
  //   pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
  //   pdf.save("Invoice.pdf");
  // };
  useEffect(() => {
    if (response) {
      window.print();
    }
  }, [response]);
  return (
    // <div>
    //   <Button onClick={handleDownloadPdf} label="Download"></Button>
    //   <Invoice id="pdf" data={response}></Invoice>
    // </div>
    // <PDFDownloadLink
    //   document={<Invoice />}
    //   fileName="movielist.pdf"
    //   style={{
    //     textDecoration: "none",
    //     padding: "10px",
    //     color: "#4a4a4a",
    //     backgroundColor: "#f2f2f2",
    //     border: "1px solid #4a4a4a",
    //   }}
    // />
    <PrintProvider>
      <NoPrint>
        <div>
          <Print printOnly single name="foo">
            <Invoice data={response} />
          </Print>
        </div>

        <MyButton
          onClick={handleDownloadPdf}
          label="Download"
          variant="contained"
          color="primary"
        ></MyButton>
      </NoPrint>
    </PrintProvider>
  );
}
