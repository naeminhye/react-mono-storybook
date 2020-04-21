import React from "react";

/** Plugins */
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

/** Components */
import { Input } from "react-mono";

const story = () => (
  <Input
    type={text("type", "text")}
    bordered={boolean("bordered", false)}
    disabled={boolean("disabled", false)}
    onChange={action('onChange')}
  />
);

export default story;
