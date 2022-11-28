import { ComponentStory, ComponentMeta } from "@storybook/react";
import AcceptButton from "./accept-button";
import React from "react";
import { Simulate } from "react-dom/test-utils";
import click = Simulate.click;

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
      <AcceptButton
        // Some components would be better with ...
        // onChange={() => { ... }}
        onClick={() => {
          const elementById = document.getElementById("button-clicked-div") as HTMLFormElement;
          let json = elementById.value
          if (json === "") {
            json = '{"counter": 0}'
          }
          const clicked = JSON.parse(json);
          clicked.counter = clicked.counter + 1
          elementById.value = JSON.stringify(clicked)
        }}
        text={"something else"}
        type={"button"}
      />

      <h3>Test harness output:</h3>
      <pre>
        <textarea id={"button-clicked-div"}></textarea>
      </pre>
    </div>
  );
};
export const Second = () => <AcceptButton text="Accept" color_={"secondary"} />;
