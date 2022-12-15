import * as React from "react";
import Link from "next/link";
import { Link as MUILink } from "@mui/material";
import { UrlObject } from "url";
type Prop = {
  href: string;
  text: string;
  urlObject?: UrlObject;
};
const CustomLinkFC: React.FC<Prop> = ({ href, text, urlObject }) => {
  return (
    <Link href={urlObject ? urlObject : href} passHref>
      <MUILink sx={{ width: "100%" }}>{text}</MUILink>
    </Link>
  );
};

export default CustomLinkFC;
