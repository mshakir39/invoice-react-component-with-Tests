import React, { SyntheticEvent, useState } from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

/* eslint-disable-next-line */
export interface TabbedDisplayProps {
  panelParent?: string;
  selected?: number;
  tabLabels: string[];
  children: React.ReactNode;
}

// To share varying state with TabPanel children.
export const TabContext = React.createContext(0);

export const TabbedDisplay: React.FC<TabbedDisplayProps> = ({
  panelParent = "unparented",
  selected = 0,
  tabLabels,
  children,
}) => {
  const tabSx = {
    color: "darkgray",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  };

  const [selectedTab, setSelectedTab] = useState(selected);

  const handleChange = (event: SyntheticEvent, chosen: number) => {
    setSelectedTab(chosen);
  };

  const tabs = tabLabels.map((x, i) => (
    <Tab
      label={x}
      key={`${panelParent}-tab-${i}`}
      sx={(theme) => ({
        ...tabSx,
        backgroundColor: theme.palette.background.paper,
      })}
    />
  )) as React.ReactNode;

  return (
    <TabContext.Provider value={selectedTab}>
      <Tabs
        variant="fullWidth"
        value={selectedTab}
        onChange={handleChange}
        aria-label={`${panelParent}-tabbed-display`}
      >
        {tabs}
      </Tabs>
      <Paper>{children}</Paper>
    </TabContext.Provider>
  );
};

export default TabbedDisplay;
