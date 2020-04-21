import React from "react";

/** Plugins */
import { select } from "@storybook/addon-knobs";

/** Components */
import { CheckList } from "react-mono";

import { transportationOptions } from "../data";

const typeOptions = {
  list: "list",
  grid: "grid",
};

const story = () => (
  <CheckList options={transportationOptions} type={select("type", typeOptions, "list")} />
);

export default story;
