import React from "react";

/** Plugins */
import { select } from "@storybook/addon-knobs";

/** Components */
import { RadioList } from "react-mono";

import { genderOptions } from "../data";

const typeOptions = {
  list: "list",
  grid: "grid",
};

const story = () => (
  <RadioList options={genderOptions} type={select("type", typeOptions, "list")} />
);

export default story;
