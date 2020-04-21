import React from "react";

/** Plugins */
import { boolean } from "@storybook/addon-knobs";

/** Components */
import { Uploader } from "react-mono";

const story = () => (
  <Uploader multiple={boolean('multiple', false)} />
);

export default story;
