import React from "react";

/** Plugins */
import { text, boolean } from "@storybook/addon-knobs";

/** Components */
import { Collapse } from "react-mono";

const story = () => (
  <Collapse
    bordered={boolean("bordered", false)}
    header={text("header", "Lorem ipsum dolor sit amet")}
  >
    {text(
      "children",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    )}
  </Collapse>
);

export default story;
