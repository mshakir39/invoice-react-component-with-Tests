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
    height: "100vh",
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

export default function Invoice() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <div className={classes.title}>INVOICE</div>
      <Box className={classes.info_Container} sx={{ pt: 5 }}>
        <div className={classes.info_Container_child}>
          <div className={classes.flexColumn}>
            <Box className={classes.flex}>
              <div style={{ width: "25%" }}>
                <span className={classes.bold}>Invoice num :</span>
              </div>
              <div style={{ width: "75%" }}>
                <span>#98872</span>
              </div>
            </Box>
            <Box className={classes.flex} sx={{ pt: 2 }}>
              <div style={{ width: "25%" }}>
                <span className={classes.bold}>Invoice Date :</span>
              </div>
              <div style={{ width: "75%" }}>
                <span>12 jan 2132</span>
              </div>
            </Box>
            <Box className={classes.flex} sx={{ pt: 5 }}>
              <div style={{ width: "25%" }}>
                <span className={classes.bold}>Terms :</span>
              </div>
              <div style={{ width: "75%" }}>
                <span>This is just a Sample Terms</span>
              </div>
            </Box>
            <Box className={classes.flex} sx={{ pt: 5 }}>
              <div style={{ width: "25%" }}>
                <span className={classes.bold}>From :</span>
              </div>
              <div style={{ width: "75%" }}>
                <span className={classes.from}>
                  <span>No Name</span>
                  <span>house # 2323,street xyz</span>
                  <span>None,California,323423</span>
                  <span>(555) 555-1234.</span>
                </span>{" "}
              </div>
            </Box>
            <Box className={classes.flex} sx={{ pt: 5 }}>
              <div style={{ width: "25%" }}>
                <span className={classes.bold}>Project :</span>
              </div>
              <div style={{ width: "75%" }}>
                <span>Project Zero</span>
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
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpnFeQNNZbq3lUcmTIQ6e7aBfGI9KuwDNUQ&usqp=CAU"
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
                  <span>No Name</span>
                  <span>house # 2323,street xyz</span>
                  <span>None,California,323423</span>
                  <span>(555) 555-1234.</span>
                </span>{" "}
              </div>
            </Box>
            <Box className={classes.flex} sx={{ pt: 5 }}>
              <div style={{ width: "25%" }}>
                <span className={classes.bold}>Project :</span>
              </div>
              <div style={{ width: "75%" }}>
                <span>Project Zero</span>
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
        >
          <tr>
            <th className={classes.th}>Description</th>
            <th className={classes.th}>Qty</th>
            <th className={classes.th}>Price</th>
            <th className={classes.th}>Amount</th>
          </tr>
          <tr>
            <td className={classes.description_td}>Item 1</td>
            <td className={classes.td}>10</td>
            <td className={classes.td}>$10</td>
            <td className={classes.td}>$100</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td className={classes.tdNoBorder}>Sub Total</td>
            <td className={classes.td}> $22320</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td className={classes.tdNoBorder}>Tax Rate</td>
            <td className={classes.td}> 10%</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td className={classes.tdNoBorder}>Tax</td>
            <td className={classes.td}> $220</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td className={classes.amountTotal}>Amount Due</td>
            <td className={classes.td} style={{ fontWeight: "bold" }}>
              {" "}
              $2,2220
            </td>
          </tr>
        </table>
        <Box sx={{ pt: 8 }}>
          <span className={classes.bold}>Notes</span>
          <br></br>

          <span style={{ paddingTop: "8px" }}> Instructions will be here</span>
        </Box>
      </Box>
    </Box>
  );
}
