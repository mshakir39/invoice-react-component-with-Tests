import { styled } from "@mui/system";

export const StyledFlex = styled("div")({
  display: "flex",
});

export const StyledFlexColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const StyledInlineBlock = styled("div")({
  display: "inline-block",
});

export const StyledTableHeader = styled("th")({
  border: "1px solid black",
  borderCollapse: "collapse",
});

export const StyledTableData = styled("td")({
  border: "1px solid black",
  borderCollapse: "collapse",
  textAlign: "right",
  lineHeight: "32px",
});

export const StyledTableDataNoBorder = styled("td")({
  borderCollapse: "collapse",
  textAlign: "right",
  lineHeight: "32px",
  fontWeight: "bold",
});

export const StyledInput = styled("input")({
  width: "-webkit-fill-available",
  height: "27px",
  border: "none",
  outline: "none",
});

export const StyledBoldSpan = styled("span")({
  fontWeight: "bold",
  marginBottom: "8px",
});

export const StyledFrom = styled("span")({
  display: "flex",
  flexDirection: "column",
  lineHeight: "28px",
});

export const StyledContainer = styled("div")({
  height: "1128px",
  width: "826px",
  paddingLeft: "10%",
  paddingRight: "10%",
});

export const StyledTitle = styled("div")({
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "30px",
});

export const StyledInfoContainerChild = styled("div")({
  width: "50%",
});
