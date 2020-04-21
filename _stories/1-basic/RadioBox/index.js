import React from "react";

/** Plugins */
import { select, text, boolean } from "@storybook/addon-knobs";

/** Components */
import { RadioBox } from "react-mono";
import { action } from "@storybook/addon-actions";

const typeOptions = {
  list: "list",
  grid: "grid",
};

const story = () => (
  <RadioBox
    value={text("value", "radio1")}
    checked={boolean("checked", false)}
    onChange={action("onChange")}
    defaultChecked={boolean("defaultChecked", false)}
    label={text("label", "Radio Box")}
    type={select("type", typeOptions, "list")}
  />
);

export default story;
