import { useEffect, useRef, useState } from "react";
import Invoice from "../Invoice/invoice";
import { Iinvoice } from "../../../constants/interfaces";
import { Transporter, initMockTransport } from "@cupola/transporter";

interface Iprops {
  data?: Iinvoice;
}

export const PrintInvoice = ({ data }: Iprops) => {
  const childRef = useRef<any>();
  const [response, setResponse] = useState<any>();
  const [called, setCalled] = useState<boolean>(false);

  const [apiTransport] = useState<Transporter>(
    initMockTransport() // If you want to use real-backend, please comment on this line
  );

  const handleDownloadPdf = async () => {
    try {
      if (data?.type === "standard") {
        await apiTransport.cupola.invoice.get().then(async (res) => {
          setResponse(res.data);
          setCalled(true);
        });
      } else if (data?.type === "custom") {
        await apiTransport.cupola.invoice
          .post({ ...childRef.current.sendDataToParent() })
          .then(async (res) => {
            console.log("post data", res.data.type);

            setResponse(res.data.type);
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
        downloadCallback={handleDownloadPdf} //download button callback
      ></Invoice>
    </div>
  );
};

export default PrintInvoice;
