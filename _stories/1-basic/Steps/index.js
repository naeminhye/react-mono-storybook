import React from "react";

/** Plugins */
// import { action } from "@storybook/addon-actions";
// import { text, select, boolean } from "@storybook/addon-knobs";

/** Components */
import { Steps } from "react-mono";

const story = () => (
  <Steps>
    <Steps.Step
      status="finish"
      index={1}
      title="Step 1"
      description="Description for Step 1"
    />
    <Steps.Step
      status="process"
      index={2}
      title="Step 2"
      description="Description for Step 2"
    />
    <Steps.Step
      status="error"
      index={3}
      title="Step 3"
      description="Description for Step 3"
    />
    <Steps.Step
      status="wait"
      index={4}
      title="Step 4"
      description="Description for Step 4"
    />
  </Steps>
);

export default story;
