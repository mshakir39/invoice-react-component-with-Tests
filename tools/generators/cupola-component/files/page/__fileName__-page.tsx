import React from "react";
import { Dashboard } from "../../complex/dashboard/dashboard";

export interface <%= className %>PageProps {
  apiHost?: string;
}

export const <%= className %>Page: React.FC<<%= className %>PageProps> = ({
  apiHost = "",
}) => {
  return <Dashboard body={<h1>Welcome to <%= className %>Page!</h1>} />;
};

export default <%= className %>Page;
