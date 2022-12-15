import React from "react";

export interface <%= className %>Props {
  apiHost?: string;
}

export const <%= className %>: React.FC<<%= className %>Props> = ({
  apiHost = "",
}) => {
  return null;
};

export default <%= className %>;
