import { makeStyles } from "@material-ui/core/styles";
import CurrencyInput from "react-currency-input-field";
import Box from "@mui/material/Box";
import {
  useEffect,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import Button from "../../simple/Button/button";
import { numberWithCommas } from "../../../helpers/AddCommaInAmount";
import DeleteIcon from "@mui/icons-material/Delete";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Iinvoice } from "../../../constants/interfaces";
import { InvoiceEntity } from "@cupola/types";

const useStyles = makeStyles({
  flex: {
    display: "flex",
  },
  table: {
    borderCollapse: "collapse",
  },
  th: {
    border: "1px solid black",
    borderCollapse: "collapse",
  },

  td: {
    border: "1px solid black",
    borderCollapse: "collapse",
    textAlign: "right",
    lineHeight: "32px",
  },
  tdNoBorder: {
    borderCollapse: "collapse",
    textAlign: "right",
    lineHeight: "32px",
  },
  amountTotal: {
    borderCollapse: "collapse",
    textAlign: "right",
    lineHeight: "32px",
    fontWeight: "bold",
  },
  description_td: {
    border: "1px solid black",
    borderCollapse: "collapse",
    lineHeight: "32px",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  from: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "28px",
  },
  fontWeightNormal: {
    fontWeight: "normal",
  },
  container: {
    height: "1128px",
    width: "826px",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "30px",
  },
  info_Container: {
    display: "flex",
    // flexDirection: "column",
  },
  info_Container_child: {
    width: "50%",
  },
  bold: {
    fontWeight: "bold",
    marginBottom: "8px",
  },
  terms: {
    fontWeight: "bold",
    marginTop: "20px",
  },
  input_field: {
    width: "-webkit-fill-available",
    height: "27px",
    border: "none",
    outline: "none",
  },
});

type Tprops = {
  ref?: HTMLElement;
  downloadCallback?: (...args: any[]) => any;
  id?: string;
  download?: boolean;
  call?: boolean;
  data: InvoiceEntity;
  downloadBtnLabel?: string;
};

const Invoice = forwardRef(
  (
    {
      id,
      data,
      download = false,
      downloadCallback,
      call,
      downloadBtnLabel = "Download",
    }: Tprops,
    ref
  ) => {
    useImperativeHandle(ref, () => ({
      sendDataToParent() {
        return invoiceData;
      },
    }));

    const [invoiceData, setInvoiceData] = useState<any>();
    const [subTotal, setSubTotal] = useState<number>(0);
    const [calls, setCalls] = useState<boolean | undefined>(false);
    const classes = useStyles();

    function getValueByPercentage(percent: number, originalValue: number) {
      return (percent / 100) * originalValue;
    }

    const onChange = (value: any, name: any) => {
      const index = Number(name.split(":")[0]);
      const key = name.split(":")[1];
      const dummyData = [...invoiceData.invoiceData];

      dummyData[index][key] = value === undefined ? "0" : value;

      setInvoiceData((prev: Iinvoice) => ({
        ...prev,
        invoiceData: [...dummyData],
      }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      const index = Number(id.split(":")[0]);
      const key = id.split(":")[1];
      const dummyData = [...invoiceData.invoiceData];

      dummyData[index][key] = value;

      setInvoiceData((prev: Iinvoice) => ({
        ...prev,
        invoiceData: [...dummyData],
      }));
    };

    const addRowHandler = () => {
      const dummyData = [...invoiceData.invoiceData];
      const dummy = {
        description: "",
        price: 0,
        qty: 0,
      };
      dummyData.push(dummy);

      setInvoiceData((prev: Iinvoice) => ({
        ...prev,
        invoiceData: [...dummyData],
      }));
    };

    const deleteRow = (index: number) => {
      const newArr = [...invoiceData.invoiceData];
      newArr.splice(index, 1);

      setInvoiceData((prev: Iinvoice) => ({
        ...prev,
        invoiceData: [...newArr],
      }));
    };

    const sub_Total = useCallback(() => {
      let total = 0;

      invoiceData?.invoiceData &&
        invoiceData.invoiceData.forEach(
          (item: { description: string; price: number; qty: number }) => {
            total = item.qty * item.price + total;
          }
        );

      setSubTotal(total);
    }, [invoiceData?.invoiceData]);

    useEffect(() => {
      sub_Total();
    }, [subTotal, sub_Total]);

    useEffect(() => {
      setInvoiceData(data);
    }, [data]);

    useEffect(() => {
      setCalls(call);
    }, [call]);

    useEffect(() => {
      if (invoiceData && calls) {
        (async function () {
          const printElement = document.querySelector("#pdf") as HTMLElement;
          const inputElement = document.querySelectorAll(
            "input"
          ) as NodeListOf<HTMLInputElement>;
          const rowBtn = document.querySelectorAll(
            ".hide"
          ) as NodeListOf<HTMLElement>;

          rowBtn.forEach((ele: HTMLElement) => {
            ele.style.display = "none";
          });

          inputElement.forEach((ele: HTMLElement) => {
            ele.style.paddingTop = "8px";
          });

          html2canvas(printElement).then((canvas) => {
            const img = canvas.toDataURL("image/png");
            const pdf = new jsPDF("portrait", "pt", "a4");
            const imgProperties = pdf.getImageProperties(img);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight =
              (imgProperties.height * pdfWidth) / imgProperties.width;
            pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
            const ID = invoiceData?.invoiceNum.replace("#", "");

            pdf.save(
              `${invoiceData?.invoiceFor["companyName"]}-invoice-${ID}.pdf`
            );
          });
        })();

        const rowBtn = document.querySelectorAll(
          ".hide"
        ) as NodeListOf<HTMLElement>;

        const inputElement = document.querySelectorAll(
          "input"
        ) as NodeListOf<HTMLInputElement>;

        rowBtn.forEach((ele: HTMLElement) => {
          ele.style.display = "block";
        });
        inputElement.forEach((ele: HTMLElement) => {
          ele.style.paddingTop = "0px";
        });
      }
    }, [calls, invoiceData]);

    return (
      <Box className={classes.container} sx={{ pt: 10 }} id="pdf">
        <div id="invoice-container">
          <form onSubmit={downloadCallback}>
            {download ? (
              <Box className="hide">
                <Button
                  type="submit"
                  id="downloadButton"
                  label={downloadBtnLabel}
                  data-testid="downloadButton"
                ></Button>
              </Box>
            ) : null}
            <div className={classes.title}>INVOICE</div>
            <Box className={classes.info_Container} sx={{ pt: 5 }}>
              <div className={classes.info_Container_child}>
                <div className={classes.flexColumn}>
                  <Box className={classes.flex}>
                    <div style={{ width: "25%" }}>
                      <span className={classes.bold}>Invoice num :</span>
                    </div>
                    <div style={{ width: "75%" }}>
                      <span data-testid="invoiceNum">
                        {invoiceData?.invoiceNum}
                      </span>
                    </div>
                  </Box>
                  <Box className={classes.flex} sx={{ pt: 2 }}>
                    <div style={{ width: "25%" }}>
                      <span className={classes.bold}>Invoice Date :</span>
                    </div>
                    <div style={{ width: "75%" }}>
                      <span data-testid="invoiceDate">
                        {invoiceData?.invoiceDate}
                      </span>
                    </div>
                  </Box>
                  <Box className={classes.flex} sx={{ pt: 5 }}>
                    <div style={{ width: "25%" }}>
                      <span className={classes.bold}>Terms :</span>
                    </div>
                    <div style={{ width: "75%" }}>
                      <span data-testid="terms">{invoiceData?.terms}</span>
                    </div>
                  </Box>
                  <Box className={classes.flex} sx={{ pt: 5 }}>
                    <div style={{ width: "25%" }}>
                      <span className={classes.bold}>From :</span>
                    </div>
                    <div style={{ width: "75%" }}>
                      <span className={classes.from}>
                        <span data-testid="fromCompanyName">
                          {invoiceData?.from["companyName"]}
                        </span>
                        <span data-testid="fromStreetAddress">
                          {invoiceData?.from["streetAddress"]}
                        </span>
                        <span data-testid="fromCity">
                          {invoiceData?.from["city"]},
                          {invoiceData?.from["state"]},
                          {invoiceData?.from["zip"]}
                        </span>
                        <span data-testid="fromNumber">
                          {invoiceData?.from["number"]}
                        </span>
                      </span>{" "}
                    </div>
                  </Box>
                  <Box className={classes.flex} sx={{ pt: 5 }}>
                    <div style={{ width: "25%" }}>
                      <span className={classes.bold}>Project :</span>
                    </div>
                    <div style={{ width: "75%" }}>
                      <span data-testid="fromProjectName">
                        {invoiceData?.projectName}
                      </span>
                    </div>
                  </Box>
                </div>
              </div>
              <div className={classes.info_Container_child}>
                <div className={classes.flexColumn}>
                  <Box className={classes.flex}>
                    <div style={{ width: "25%" }}>
                      <img
                        className={classes.bold}
                        style={{ height: "100px" }}
                        alt=""
                        data-testid="invoiceLogo"
                        src={invoiceData?.invoiceLogo}
                      ></img>
                    </div>
                    <div style={{ width: "75%" }}></div>
                  </Box>
                  <Box className={classes.flex} sx={{ pt: 5 }}>
                    <div style={{ width: "25%" }}>
                      <span className={classes.bold}>Invoice For :</span>
                    </div>
                    <div style={{ width: "75%" }}>
                      <span className={classes.from}>
                        <span data-testid="invoiceForCompanyName">
                          {invoiceData?.invoiceFor["companyName"]}
                        </span>
                        <span data-testid="invoiceForStreetAddress">
                          {invoiceData?.invoiceFor["streetAddress"]}
                        </span>
                        <span data-testid="invoiceForCity">
                          {invoiceData?.invoiceFor["city"]},
                          {invoiceData?.invoiceFor["state"]},
                          {invoiceData?.invoiceFor["zip"]}
                        </span>
                        <span data-testid="invoiceForNumber">
                          {invoiceData?.invoiceFor["number"]}
                        </span>
                      </span>{" "}
                    </div>
                  </Box>
                  <Box className={classes.flex} sx={{ pt: 5 }}>
                    <div style={{ width: "25%" }}>
                      <span className={classes.bold}>Project :</span>
                    </div>
                    <div style={{ width: "75%" }}>
                      <span data-testid="invoiceForProjectName">
                        {invoiceData?.projectName}
                      </span>
                    </div>
                  </Box>
                </div>
              </div>
            </Box>

            {invoiceData?.type === "custom" && (
              <Box
                textAlign={"end"}
                className="hide"
                id="addRowContainer"
                data-testid="addRowContainer"
              >
                <Button
                  label="Add Row"
                  onClick={addRowHandler}
                  data-testid="addRow"
                ></Button>
              </Box>
            )}

            <Box sx={{ pt: 10 }}>
              <table
                className={classes.table}
                style={{
                  width: "100%",
                }}
                data-testid="table"
              >
                <tbody>
                  <tr>
                    <th className={classes.th}>Description</th>
                    <th className={classes.th}>Qty</th>
                    <th className={classes.th}>Price</th>
                    <th className={classes.th}>Amount</th>
                  </tr>
                  {invoiceData?.invoiceData.map((Item: any, i: string) => (
                    <tr key={i}>
                      <td className={classes.description_td}>
                        {data?.type === "custom" ? (
                          <input
                            className={classes.input_field}
                            required
                            data-cy="text-input"
                            id={`${i}:description`}
                            data-testid={`${i}:description`}
                            type="text"
                            value={Item.description}
                            onChange={handleChange}
                          />
                        ) : (
                          Item.description
                        )}
                      </td>
                      <td className={classes.td} style={{ textAlign: "left" }}>
                        {data?.type === "custom" ? (
                          <CurrencyInput
                            className={classes.input_field}
                            id={`${i}:qty`}
                            name={`${i}:qty`}
                            placeholder="Please enter a number"
                            defaultValue={0}
                            decimalsLimit={2}
                            data-testid={`${i}:qty`}
                            data-cy="text-input"
                            onValueChange={(value, name) =>
                              onChange(value, name)
                            }
                            value={Item.qty}
                            style={{
                              fontSize: "16px",
                              fontFamily: "inherit",
                            }}
                          />
                        ) : (
                          Item.qty
                        )}
                      </td>
                      <td className={classes.td}>
                        <Box
                          pl={1}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          $
                          {data?.type === "custom" ? (
                            <CurrencyInput
                              className={classes.input_field}
                              id={`${i}:price`}
                              name={`${i}:price`}
                              defaultValue={0}
                              decimalsLimit={2}
                              data-testid={`${i}:price`}
                              data-cy="text-input"
                              value={Item.price}
                              onValueChange={(value, name) =>
                                onChange(value, name)
                              }
                              style={{
                                fontSize: "16px",
                                fontFamily: "inherit",
                              }}
                            />
                          ) : (
                            `${Item.price}`
                          )}
                        </Box>
                      </td>
                      <td className={classes.td} id={`${i}amount`}>
                        ${" "}
                        {numberWithCommas(
                          Number(
                            Item.qty === 0
                              ? 1 * Item.price
                              : Item.price * Item.qty
                          ).toFixed(2)
                        )}
                      </td>
                      {invoiceData?.type === "custom" && (
                        <td className="hide">
                          <Box position={"absolute"}>
                            {Number(i) !== 0 && (
                              <DeleteIcon
                                style={{ top: "-13px", position: "absolute" }}
                                onClick={() => deleteRow(Number(i))}
                                id="deleteRow"
                                sx={{
                                  color: "#e39c9c",
                                  cursor: "pointer",
                                  marginLeft: "10px",
                                }}
                              />
                            )}
                          </Box>
                        </td>
                      )}
                    </tr>
                  ))}

                  <tr>
                    <td></td>
                    <td></td>
                    <td className={classes.tdNoBorder}>Sub Total</td>
                    <td className={classes.td} id="subTotal">
                      {subTotal !== 0
                        ? "$ " + numberWithCommas(subTotal.toFixed(2))
                        : ""}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className={classes.tdNoBorder}>Tax Rate</td>
                    <td className={classes.td}>
                      {" "}
                      {invoiceData?.taxRate + " %"}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className={classes.tdNoBorder}>Tax</td>
                    <td className={classes.td}>
                      {" "}
                      {getValueByPercentage(invoiceData?.taxRate, subTotal)
                        ? "$ " +
                          numberWithCommas(
                            getValueByPercentage(
                              invoiceData?.taxRate,
                              subTotal
                            ).toFixed(2)
                          )
                        : ""}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className={classes.amountTotal}>Amount Due</td>
                    <td
                      className={classes.td}
                      style={{ fontWeight: "bold" }}
                      id="amountDue"
                    >
                      {Number(
                        getValueByPercentage(invoiceData?.taxRate, subTotal)
                      ) + Number(subTotal)
                        ? `$ ${numberWithCommas(
                            Number(
                              Number(
                                getValueByPercentage(
                                  invoiceData?.taxRate,
                                  subTotal
                                )
                              ) + Number(subTotal)
                            ).toFixed(2)
                          )}
                     `
                        : ""}
                    </td>
                  </tr>
                </tbody>
              </table>

              <Box sx={{ pt: 8 }}>
                <span className={classes.bold}>Notes</span>
                <br></br>

                <span style={{ paddingTop: "8px" }} data-testid="notes">
                  {" "}
                  {invoiceData?.notes}
                </span>
              </Box>
            </Box>
          </form>
        </div>
      </Box>
    );
  }
);

export default Invoice;
