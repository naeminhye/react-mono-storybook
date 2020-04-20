import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";
import { create } from "@storybook/theming";
import theme from "./theme";
import "./index.scss";

setOptions({
  name: "React Mono UI",
  url: "https://naeminhye.github.io/react-mono/",
});

addParameters({
  options: {
    isFullScreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: "bottom",
    sortStoriesByKind: true,
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: false,
    enableShortcuts: true,
    isToolshown: true,
    theme: create(theme),
  },
});

function loadStories() {
  require("../_stories");
}
const storyWrapper = (story) => <div className="story--wrapper">{story()}</div>;

addDecorator(
  withInfo({
    inline: true,
    header: false,
    source: true,
    maxPropsIntoLine: 1,
  })
);
addDecorator(storyWrapper);

configure(loadStories, module);
