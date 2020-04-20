import React from "react";

/** Plugins */
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";

/** Components */
import { Button } from "react-mono";

const sizeOptions = {
  xs: "xs",
  sm: "sm",
  lg: "lg",
  "No Value": "",
};

const typeOptions = {
  default: "default",
  outline: "outline",
  primary: "primary",
  secondary: "secondary",
  success: "success",
  warning: "warning",
  info: "info",
  danger: "danger",
};

const story = () => (
  <Button
    disabled={boolean("disabled", false)}
    size={select("size", sizeOptions, "")}
    onClick={action("clicked")}
    type={select("type", typeOptions, "")}
  >
    {text("children", "Click Here")}
  </Button>
);

export default story;
