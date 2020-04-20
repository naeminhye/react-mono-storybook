/* eslint-disable jsx-a11y/alt-text */
import React from "react";

/** Plugins */
import { action } from "@storybook/addon-actions";
import { text, select, boolean, number } from "@storybook/addon-knobs";

/** Components */
import { Carousel } from "react-mono";

import { slideData } from "./data";

const itemRender = (data) => {
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        color: "black",
      }}
    >
      <img src={data.src} style={{ width: "100%" }} />
      <span>{data.headline}</span>
    </div>
  );
};

const alignmentOptions = {
  start: "start",
  center: "center",
};

const story = () => (
  <div style={{ width: "100%" }}>
    <Carousel
      heading={text("heading", "Carousel")}
      slides={slideData}
      itemWidth={number("itemWidth", 320)}
      itemHeight={number("itemHeight", 400)}
      itemMargin={number("itemMargin", 10)}
      itemRender={itemRender}
      activeSlideAlignment={select(
        "activeSlideAlignment",
        alignmentOptions,
        "start"
      )}
    />
  </div>
);

export default story;
