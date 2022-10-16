import { ComponentStory, ComponentMeta } from "@storybook/react";
import AcceptButton from "./accept-button";
import React from "react";

export default {
  component: AcceptButton,
} as ComponentMeta<typeof AcceptButton>;

const Template: ComponentStory<typeof AcceptButton> = (args) => (
  <AcceptButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Basic = () => {
  return (
    <div>
      <div id={"button-clicked-div"} style={{ display: "none" }}>
        Button Clicked
      </div>
      <AcceptButton
        onClick={() => {
          const elementById = document.getElementById("button-clicked-div");
          if (elementById) {
            elementById.style.display = "inline";
          }
        }}
        text={"something else"}
        type={"button"}
      />
    </div>
  );
};
export const Second = () => <AcceptButton text="Accept" color_={"secondary"} />;
