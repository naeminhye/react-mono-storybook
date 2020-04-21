import React from "react";

/** Plugins */
import { text, select, boolean } from "@storybook/addon-knobs";

/** Components */
import { Tooltip, Tag } from "react-mono";

const placementOptions = {
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
};

const story = () => (
  <div style={{ padding: 42 }}>
    <Tooltip
      placement={select("placement", placementOptions, "top")}
      title={text("title", "This is the tooltip")}
    >
      <Tag>Tooltip</Tag>
    </Tooltip>
  </div>
);

export default story;
