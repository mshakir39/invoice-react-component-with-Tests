import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";

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
});

type Tprops = {
  ref?: React.RefObject<HTMLElement>;
  id?: string;
  data: any;
};

const Invoice = ({ id, data }: Tprops) => {
  const classes = useStyles();

  function getValueByPercentage(percent: any, originalValue: any) {
    return (percent / 100) * originalValue;
  }

  let subTotal = 0;
  data &&
    data.invoiceData &&
    data.invoiceData.forEach((item: any) => {
      subTotal = item.qty * item.price + subTotal;
    });

  return (
    <Box className={classes.container} id={id} sx={{ pt: 10 }}>
      <div id="invoice-container">
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
                    {data && data.invoiceNum}
                  </span>
                </div>
              </Box>
              <Box className={classes.flex} sx={{ pt: 2 }}>
                <div style={{ width: "25%" }}>
                  <span className={classes.bold}>Invoice Date :</span>
                </div>
                <div style={{ width: "75%" }}>
                  <span data-testid="invoiceDate">
                    {data && data.invoiceDate}
                  </span>
                </div>
              </Box>
              <Box className={classes.flex} sx={{ pt: 5 }}>
                <div style={{ width: "25%" }}>
                  <span className={classes.bold}>Terms :</span>
                </div>
                <div style={{ width: "75%" }}>
                  <span data-testid="terms">{data && data.terms}</span>
                </div>
              </Box>
              <Box className={classes.flex} sx={{ pt: 5 }}>
                <div style={{ width: "25%" }}>
                  <span className={classes.bold}>From :</span>
                </div>
                <div style={{ width: "75%" }}>
                  <span className={classes.from}>
                    <span data-testid="fromCompanyName">
                      {data && data.from["companyName"]}
                    </span>
                    <span data-testid="fromStreetAddress">
                      {data && data.from["streetAddress"]}
                    </span>
                    <span data-testid="fromCity">
                      {data && data.from["city"]},{data && data.from["state"]},
                      {data && data.from["zip"]}
                    </span>
                    <span data-testid="fromNumber">
                      {data && data.from["number"]}
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
                    {data && data.projectName}
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
                    src={data && data.invoiceLogo}
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
                      {data && data.invoiceFor["companyName"]}
                    </span>
                    <span data-testid="invoiceForStreetAddress">
                      {data && data.invoiceFor["streetAddress"]}
                    </span>
                    <span data-testid="invoiceForCity">
                      {data && data.invoiceFor["city"]},
                      {data && data.invoiceFor["state"]},
                      {data && data.invoiceFor["zip"]}
                    </span>
                    <span data-testid="invoiceForNumber">
                      {data && data.invoiceFor["number"]}
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
                    {data && data.projectName}
                  </span>
                </div>
              </Box>
            </div>
          </div>
        </Box>
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
              {data &&
                data.invoiceData.map((Item: any, i: string) => (
                  <tr key={i}>
                    <td className={classes.description_td}>
                      {Item.description}
                    </td>
                    <td className={classes.td}>{Item.qty}</td>
                    <td className={classes.td}>${Item.price}</td>
                    <td className={classes.td}>${Item.price * Item.qty}</td>
                  </tr>
                ))}

              <tr>
                <td></td>
                <td></td>
                <td className={classes.tdNoBorder}>Sub Total</td>
                <td className={classes.td}>
                  {subTotal !== 0 ? "$" + subTotal : ""}
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className={classes.tdNoBorder}>Tax Rate</td>
                <td className={classes.td}> {data && data.taxRate + "%"}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className={classes.tdNoBorder}>Tax</td>
                <td className={classes.td}>
                  {" "}
                  {getValueByPercentage(data && data.taxRate, subTotal)
                    ? "$" + getValueByPercentage(data && data.taxRate, subTotal)
                    : ""}
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className={classes.amountTotal}>Amount Due</td>
                <td className={classes.td} style={{ fontWeight: "bold" }}>
                  {Number(
                    getValueByPercentage(data && data.taxRate, subTotal)
                  ) + Number(subTotal)
                    ? `$ ${
                        Number(
                          getValueByPercentage(data && data.taxRate, subTotal)
                        ) + Number(subTotal)
                      }
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
              {data && data.notes}
            </span>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Invoice;
