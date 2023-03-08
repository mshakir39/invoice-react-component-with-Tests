import { useEffect, useState } from "react";
import Invoice from "../complex/Invoice/invoice";
import PrintProvider, { Print, NoPrint } from "react-easy-print";
import { Transporter, initMockTransport } from "@cupola/transporter";
import MyButton from "../simple/accept-button/accept-button";

export default function PrintInvoice() {
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

  useEffect(() => {
    if (response) {
      window.print();
    }
  }, [response]);

  return (
    <PrintProvider>
      <NoPrint>
        <div>
          <Print printOnly single name="foo">
            <Invoice data={response} />
          </Print>
        </div>

        <MyButton onClick={handleDownloadPdf} text="Download"></MyButton>
      </NoPrint>
    </PrintProvider>
  );
}
