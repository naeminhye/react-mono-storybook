import React from "react";

/** Plugins */
import { action } from "@storybook/addon-actions";

/** Components */
import { FlipCard } from "react-mono";

const story = () => (
  <FlipCard
    clickable={true}
    front={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          WebkitTextFillColor: "white",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "black",
          fontFamily: "Montserrat, Arial",
          fontSize: "64px",
          fontWeight: 900,
        }}
      >
        Front
      </div>
    }
    back={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          WebkitTextFillColor: "white",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "black",
          fontFamily: "Montserrat, Arial",
          fontSize: "64px",
          fontWeight: 900,
        }}
      >
        Back
      </div>
    }
  />
);

export default story;
