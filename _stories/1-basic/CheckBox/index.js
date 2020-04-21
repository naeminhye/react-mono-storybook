import React from "react";

/** Plugins */
import { select, text, boolean } from "@storybook/addon-knobs";

/** Components */
import { CheckBox } from "react-mono";

const typeOptions = {
  list: "list",
  grid: "grid",
};

const story = () => (
  <CheckBox
    defaultChecked={boolean("defaultChecked", false)}
    halfCheck={boolean("halfCheck", false)}
    label={text("label", "Check Box")}
    type={select("type", typeOptions, "list")}
  />
);

export default story;
