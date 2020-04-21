import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Button from "./Button";
import Carousel from "./Carousel";
import DropDown from "./DropDown";
import FlipCard from "./FlipCard";
import Steps from "./Steps";
import Table from "./Table";
import Tooltip from "./Tooltip";

storiesOf("Basic Components", module)
  .addDecorator(withKnobs)
  .add("Button", Button)
  .add("Carousel", Carousel)
  .add("DropDown", DropDown)
  .add("FlipCard", FlipCard)
  .add("Steps", Steps)
  .add("Table", Table)
  .add("Tooltip", Tooltip);
