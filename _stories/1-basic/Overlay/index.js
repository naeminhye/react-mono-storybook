import React from "react";

/** Plugins */
import { text, select, boolean, number } from "@storybook/addon-knobs";

/** Components */
import { Overlay } from "react-mono";

const placementOptions = {
  fullscreen: "default",
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
};

const story = () => (
  <Overlay
    dim={number("dim", 0.5)}
    content={text("content", "Hello")}
    placement={select("placement", placementOptions, "default")}
    visible={boolean("visible", false)}
    hoverable={boolean("hoverable", true)}
  >
    <img
      src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
      width="300"
      height="200"
      alt=""
    />
  </Overlay>
);

export default story;
