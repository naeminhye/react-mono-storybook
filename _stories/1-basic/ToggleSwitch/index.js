import React from "react";

/** Plugins */
import { text, select, boolean } from "@storybook/addon-knobs";

/** Components */
import { ToggleSwitch } from "react-mono";

const variantOptions = {
  primary: "primary",
  danger: "danger",
  success: "success",
  default: "",
};

const story = () => (
  <div style={{ padding: 42 }}>
    <ToggleSwitch
      variant={select("variant", variantOptions, "")}
      rounded={boolean("rounded", false)}
      name={text("name", "This is the ToggleSwitch")}
    />
  </div>
);

export default story;
