import { PropsWithChildren } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdKeyboardArrowDown } from "react-icons/md";

export interface IAccordion extends PropsWithChildren {
  label: string;
  dataTestId?: string;
  typographyStyle?: object;
  Icon?:
    | React.ReactNode
    | React.ReactElement
    | React.ReactSVGElement
    | React.ReactSVG;
}

export const AccordionComponent: React.FC<IAccordion> = (props) => {
  const { label, children, dataTestId, typographyStyle, Icon = null } = props;

  return (
    <div>
      <Accordion defaultExpanded data-testid="accordion-testId">
        <AccordionSummary
          expandIcon={<MdKeyboardArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          data-testid={dataTestId}
          className="accordionStyle"
        >
          <Typography style={typographyStyle}>
            <>
              {Icon}
              {label}
            </>{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: "0px" }}>
          <Typography data-testid="accordion-children">{children}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
