import React from "react";

/** Plugins */
import { action } from "@storybook/addon-actions";

/** Components */
import { DropDown } from "react-mono";

import { dropdownOptions } from "../data";

const story = () => (
  <DropDown
    value="option-1"
    options={dropdownOptions}
    onChange={action("onChange")}
  />
);

export default story;
