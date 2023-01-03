import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";

export default function AccountSettings({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) {
  return (
    <Accordion sx={{ maxWidth: 1175 }}>
      <AccordionSummary
        id="panel1a-header"
        expandIcon={<ExpandMoreIcon sx={{ color: "#6e6767" }} />}
        aria-controls="panel-account-settings-content"
        sx={{
          background: "#eecdb1e8",
        }}
      >
        <SettingsIcon sx={{ marginRight: 4 }} />
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
