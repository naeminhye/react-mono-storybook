import React from "react";

/** Plugins */
import { text, boolean, select, number, color } from "@storybook/addon-knobs";

/** Components */
import { Avatar } from "react-mono";

const borderStyleOptions = {
  dotted: "dotted",
  dashed: "dashed",
  solid: "solid",
  double: "double",
  groove: "groove",
  ridge: "ridge",
  inset: "inset",
  outset: "outset",
};

const story = () => (
  <Avatar
    bordered={boolean("bordered", true)}
    borderStyle={{
      //   border: text("borderStyle", "2px solid black"),
      borderStyle: select("borderStyle", borderStyleOptions, "solid"),
      borderWidth: text("borderWidth", "2px"),
      borderColor: color("borderColor", "black"),
    }}
    size={number("size", 100)}
    src={text(
      "src",
      "https://cdn.shopify.com/s/files/1/2580/0020/files/TontonHouse-______180221_3b75508e-934d-4158-84d2-704f0d5eb1a8_300x.png?v=1529488745"
    )}
  />
);

export default story;
