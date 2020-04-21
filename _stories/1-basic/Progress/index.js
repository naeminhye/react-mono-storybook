import React from "react";

/** Plugins */
import { color, select, boolean, number } from "@storybook/addon-knobs";

/** Components */
import { Progress } from "react-mono";

const typeOptions = {
  line: "line",
  circle: "circle",
};

const strokeLinecapOptions = {
  round: "round",
  square: "square",
};

const story = () => (
  <Progress
    type={select("type", typeOptions, "circle")}
    percent={number("percent", 50)}
    width={number("width", 100)}
    strokeWidth={number("strokeWidth", 10)}
    // strokeLinecap={select("strokeLinecap", strokeLinecapOptions, "square")}
    strokeLinecap="square"
    strokeColor={color("strokeColor", "#0a3961")}
    showInfo={boolean("showInfo", false)}
  />
);

export default story;
