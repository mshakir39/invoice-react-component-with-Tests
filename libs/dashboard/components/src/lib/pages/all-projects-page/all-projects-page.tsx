import React, { useCallback, useEffect, useState } from "react";
import { Dashboard } from "../../complex/dashboard/dashboard";
import { useGlobalAppContext } from "../../complex/context/context";
import { ProjectEntity, ProjectState } from "@cupola/types";
import { AxiosResponse } from "axios";
import TabPanel from "../../simple/tab-panel/tab-panel";
import TabbedDisplay from "../../complex/tabbed-display/tabbed-display";

import { initTransport, Transporter } from "@cupola/transporter";
import dynamic from "next/dynamic";
dynamic(import("@mui/icons-material/Search"));
interface AllProjectsPageProps {
  apiHost?: string;
}
// region Local filter definitions

export const projectIsActiveWithPhases = (project: ProjectEntity) =>
  project.state !== "Paused" &&
  project.state !== "Finished" &&
  project.state !== "Disapproved" &&
  (project.derivedFeeTemplate?.templates || []).length > 0;

// endregion Local filter definitions

/**
 * TODO: Add filters to Project Header component prop and pass the values here to filter projects based on provided filters.
 * @param apiHost
 * @constructor
 */
export const AllProjectsPage: React.FC<AllProjectsPageProps> = ({
  apiHost = "",
}) => {


  // region Markup
  return (
    <Dashboard
      body={
        <TabbedDisplay tabLabels={["Home", "xxx"]} selected={0}>
          <TabPanel index={0}>
          </TabPanel>
          <TabPanel index={1}>

          </TabPanel>
        </TabbedDisplay>
      }
    />
  );

  // endregion Markup
};

export default AllProjectsPage;
