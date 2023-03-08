import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import {
  useEffect,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";

import AcceptButton from "../../simple/accept-button/accept-button";
import { DollarInput } from "../../simple/dollar-input/dollar-input";
import { numberWithCommas } from "../../../helpers/AddCommaInAmount";
import DeleteIcon from "@mui/icons-material/Delete";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { IInvoice, IInvoiceRow } from "@cupola/types";
import { getValueByPercentage } from "../../../helpers/getValueByPercentage";

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
  inline_block: {
    display: "inline-block",
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
  data: IInvoice | undefined;
  downloadBtnLabel?: string;
  target?: string;
};

const Invoice = forwardRef(
  (
    {
      id,
      data,
      download = false,
      downloadCallback,
      call,
      target,
      downloadBtnLabel = "Download",
    }: Tprops,
    ref
  ) => {
    useImperativeHandle(ref, () => ({
      sendDataToParent() {
        return invoiceInfo;
      },
    }));

    const [invoiceInfo, setInvoiceInfo] = useState<IInvoice | undefined>({});
    const [subTotal, setSubTotal] = useState<number>(0);
    const [calls, setCalls] = useState<boolean | undefined>(false);
    const classes = useStyles();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value, name } = e.target;

      let key;
      let index;

      if (id) {
        key = id.split(":")[1];
        index = Number(id.split(":")[0]);
      } else {
        index = Number(name.split(":")[0]);

        key = name.split(":")[1];
      }
      // eslint-disable-next-line no-unsafe-optional-chaining
      const dummyData = invoiceInfo?.invoiceData?.slice();
      if (key !== undefined && dummyData)
        dummyData[index][key as keyof typeof dummyData[typeof index]] = value;

      setInvoiceInfo((prev: any) => ({
        ...prev,
        invoiceData: dummyData,
      }));
    };

    const addRowHandler = () => {
      // eslint-disable-next-line no-unsafe-optional-chaining
      const dummyData = invoiceInfo?.invoiceData?.slice();
      const dummy = {
        description: "",
        price: 0,
        qty: 0,
      };
      dummyData?.push(dummy);

      setInvoiceInfo((prev: any) => ({
        ...prev,
        invoiceData: dummyData,
      }));
    };

    const deleteRow = (index: number) => {
      // eslint-disable-next-line no-unsafe-optional-chaining
      const newArr = invoiceInfo?.invoiceData?.slice();
      newArr?.splice(index, 1);

      setInvoiceInfo((prev: any) => ({
        ...prev,
        invoiceData: newArr,
      }));
    };

    const sub_Total = useCallback(() => {
      let total = 0;

      invoiceInfo?.invoiceData &&
        invoiceInfo.invoiceData.forEach(
          (item: { description: string; price: number; qty: number }) => {
            total = item.qty * item.price + total;
          }
        );

      setSubTotal(total);
    }, [invoiceInfo?.invoiceData]);

    useEffect(() => {
      sub_Total();
    }, [subTotal, sub_Total]);

    useEffect(() => {
      setInvoiceInfo(data);
    }, [data]);

    useEffect(() => {
      setCalls(call);
    }, [call]);

    useEffect(() => {
      if (invoiceInfo && calls) {
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
            const ID = invoiceInfo?.invoiceNum?.replace("#", "");

            pdf.save(
              `${
                invoiceInfo?.invoiceFor && invoiceInfo.invoiceFor["companyName"]
              }-invoice-${ID}.pdf`
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
    }, [calls, invoiceInfo]);

    return (
      <Box className={classes.container} sx={{ pt: 10 }} id="pdf">
        <div id="invoice-container">
          <form onSubmit={downloadCallback}>
            {download ? (
              <Box className="hide">
                <AcceptButton
                  type="submit"
                  id="downloadButton"
                  dataTestId="downloadButton"
                  text={downloadBtnLabel}
                  fullWidth={false}
                ></AcceptButton>
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
                        {invoiceInfo?.invoiceNum}
                      </span>
                    </div>
                  </Box>
                  <Box className={classes.flex} sx={{ pt: 2 }}>
                    <div style={{ width: "25%" }}>
                      <span className={classes.bold}>Invoice Date :</span>
                    </div>
                    <div style={{ width: "75%" }}>
                      <span data-testid="invoiceDate">
                        {invoiceInfo?.invoiceDate &&
                          invoiceInfo?.invoiceDate.toString()}
                      </span>
                    </div>
                  </Box>
                  <Box className={classes.flex} sx={{ pt: 5 }}>
                    <div style={{ width: "25%" }}>
                      <span className={classes.bold}>Terms :</span>
                    </div>
                    <div style={{ width: "75%" }}>
                      <span data-testid="terms">{invoiceInfo?.terms}</span>
                    </div>
                  </Box>
                  <Box className={classes.flex} sx={{ pt: 5 }}>
                    <div style={{ width: "25%" }}>
                      <span className={classes.bold}>From :</span>
                    </div>
                    <div style={{ width: "75%" }}>
                      <span className={classes.from}>
                        <span data-testid="fromCompanyName">
                          {invoiceInfo?.from && invoiceInfo.from["companyName"]}
                        </span>
                        <span data-testid="fromStreetAddress">
                          {invoiceInfo?.from &&
                            invoiceInfo.from["streetAddress"]}
                        </span>
                        <span data-testid="fromCity">
                          {invoiceInfo?.from && invoiceInfo.from["city"]},
                          {invoiceInfo?.from && invoiceInfo.from["state"]},
                          {invoiceInfo?.from && invoiceInfo.from["zip"]}
                        </span>
                        <span data-testid="fromNumber">
                          {invoiceInfo?.from && invoiceInfo.from["number"]}
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
                        {invoiceInfo?.projectName}
                      </span>
                    </div>
                  </Box>
                </div>
              </div>
              <div className={classes.info_Container_child}>
                <div className={classes.flexColumn}>
                  <Box className={classes.inline_block}>
                    <div style={{ width: "25%" }}>
                      <img
                        className={classes.bold}
                        style={{ height: "100px" }}
                        alt=""
                        data-testid="invoiceLogo"
                        src={invoiceInfo?.invoiceLogo}
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
                          {invoiceInfo?.invoiceFor &&
                            invoiceInfo.invoiceFor["companyName"]}
                        </span>
                        <span data-testid="invoiceForStreetAddress">
                          {invoiceInfo?.invoiceFor &&
                            invoiceInfo.invoiceFor["streetAddress"]}
                        </span>
                        <span data-testid="invoiceForCity">
                          {invoiceInfo?.invoiceFor &&
                            invoiceInfo.invoiceFor["city"] &&
                            invoiceInfo?.invoiceFor &&
                            invoiceInfo.invoiceFor["city"]}
                          ,
                          {invoiceInfo?.invoiceFor &&
                            invoiceInfo.invoiceFor["state"]}
                          ,
                          {invoiceInfo?.invoiceFor &&
                            invoiceInfo.invoiceFor["zip"]}
                        </span>
                        <span data-testid="invoiceForNumber">
                          {invoiceInfo?.invoiceFor &&
                            invoiceInfo.invoiceFor["number"]}
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
                        {invoiceInfo?.projectName}
                      </span>
                    </div>
                  </Box>
                </div>
              </div>
            </Box>

            {invoiceInfo?.type === "custom" && (
              <Box
                textAlign={"end"}
                className="hide"
                id="addRowContainer"
                data-testid="addRowContainer"
              >
                {target !== "test" ? (
                  <AcceptButton
                    type="button"
                    data-testid="addRow"
                    onClick={addRowHandler}
                    text={"Add Row"}
                    fullWidth={false}
                  ></AcceptButton>
                ) : (
                  <button
                    type="button"
                    data-testid="addRow"
                    onClick={addRowHandler}
                  >
                    Add Row
                  </button>
                )}
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
                  {invoiceInfo?.invoiceData &&
                    invoiceInfo.invoiceData.map(
                      (Item: IInvoiceRow, i: number) => (
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
                          <td
                            className={classes.td}
                            style={{ textAlign: "left" }}
                          >
                            {
                              // this Component has more functionality that was used before
                              // thats why i have replaced input field by DollarInput
                            }
                            {data?.type === "custom" ? (
                              <DollarInput
                                onChange={handleChange}
                                id={`${i}:qty`}
                                value={Item.qty}
                                dataTestId={`${i}:qty`}
                                data-cy="text-input"
                                sx={{ height: "100%" }}
                                inputProps={{
                                  disableUnderline: true,
                                  "data-testid": `${i}:qty`,
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
                              {data?.type === "custom" ? (
                                <DollarInput
                                  onChange={handleChange}
                                  id={`${i}:price`}
                                  value={Item.price}
                                  dataTestId={`${i}:price`}
                                  data-cy="text-input"
                                  sx={{ height: "100%" }}
                                  inputProps={{
                                    disableUnderline: true,
                                    "data-testid": `${i}:price`,
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
                          {invoiceInfo?.type === "custom" && (
                            <td className="hide">
                              <Box position={"absolute"}>
                                {Number(i) !== 0 && (
                                  <DeleteIcon
                                    style={{
                                      top: "-13px",
                                      position: "absolute",
                                    }}
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
                      )
                    )}

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
                      {invoiceInfo?.taxRate + " %"}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className={classes.tdNoBorder}>Tax</td>
                    <td className={classes.td}>
                      {" "}
                      {getValueByPercentage(
                        invoiceInfo?.taxRate ? invoiceInfo?.taxRate : 0,
                        subTotal
                      )
                        ? "$ " +
                          numberWithCommas(
                            getValueByPercentage(
                              invoiceInfo?.taxRate ? invoiceInfo?.taxRate : 0,
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
                        getValueByPercentage(
                          invoiceInfo?.taxRate ? invoiceInfo?.taxRate : 0,
                          subTotal
                        )
                      ) + Number(subTotal)
                        ? `$ ${numberWithCommas(
                            Number(
                              Number(
                                getValueByPercentage(
                                  invoiceInfo?.taxRate
                                    ? invoiceInfo?.taxRate
                                    : 0,
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
                  {invoiceInfo?.notes}
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
