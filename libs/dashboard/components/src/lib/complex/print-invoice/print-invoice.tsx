import { useEffect, useRef, useState } from "react";
import Invoice from "../Invoice/invoice";
import { Transporter, initMockTransport } from "@cupola/transporter";
import { IInvoice, InvoiceEntity } from "@cupola/types";

interface CanSendDataToParent {
  sendDataToParent(): any;
}
type invoiceProps = {
  data?: InvoiceEntity;
};

export const PrintInvoice = ({ data }: invoiceProps) => {
  const childRef = useRef<CanSendDataToParent>(null);
  const [response, setResponse] = useState<IInvoice>();
  const [called, setCalled] = useState<boolean>(false);

  const [apiTransport] = useState<Transporter>(
    initMockTransport() // If you want to use real-backend, please comment on this line
  );

  const handleDownloadPdf = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (data?.type === "standard") {
        await apiTransport.cupola.invoice.get().then(async (res) => {
          setResponse(res.data);
          setCalled(true);
        });
      } else if (data?.type === "custom") {
        await apiTransport.cupola.invoice
          .post({ ...childRef.current?.sendDataToParent() })
          .then(async (res) => {
            const data = res.data.type as any;
            setResponse(data);
            setCalled(true);
          });
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    return () => {
      setCalled(false);
    };
  }, [called]);

  useEffect(() => {
    if (data) setResponse(data);
  }, [data]);

  return (
    <div data-testid="container">
      <Invoice
        id="pdf"
        ref={childRef}
        data={response}
        call={called} //whenever download button is Clicked this will be pass
        download={true} //if you want to show download Button
        downloadBtnLabel="Download"
        downloadCallback={(e: React.FormEvent<HTMLFormElement>) =>
          handleDownloadPdf(e)
        } //download button callback
      ></Invoice>
    </div>
  );
};

export default PrintInvoice;
