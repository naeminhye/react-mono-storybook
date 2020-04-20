import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Button from "./Button";
import Carousel from "./Carousel";
import Steps from "./Steps";
import Table from "./Table";

storiesOf("Basic Components", module)
  .addDecorator(withKnobs)
  .add("Button", Button)
  .add("Carousel", Carousel)
  .add("Steps", Steps)
  .add("Table", Table);
