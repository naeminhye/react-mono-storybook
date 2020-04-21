import React from "react";

/** Plugins */
import { select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

/** Components */
import { DatePicker } from "react-mono";

const formatOptions = {
  "YYYY-MM-DD": "YYYY-MM-DD",
  "YYYY/MM/DD": "YYYY/MM/DD",
  "M/D/YYYY": "M/D/YYYY",
  "M/D/YY": "M/D/YY",
  "MM/DD/YY": "MM/DD/YY",
  "MM/DD/YYYY": "MM/DD/YYYY",
  "YY/MM/DD": "YY/MM/DD",
  "DD-MMM-YY": "DD-MMM-YY",
};

const story = () => (
  <DatePicker
    value={text("value", "1/22/20")}
    format={(select("format", formatOptions), "M/D/YY")}
    bordered={boolean("bordered", false)}
    onChange={action("onChange")}
  />
);

export default story;
