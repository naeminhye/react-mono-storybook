import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Avatar from "./Avatar";
import Breadcrumb from "./Breadcrumb";
import Button from "./Button";
import Card from "./Card";
import Carousel from "./Carousel";
// import CheckBox from "./CheckBox";
import CheckList from "./CheckList";
import Collapse from "./Collapse";
import DatePicker from "./DatePicker";
import DropDown from "./DropDown";
import Editor from "./Editor";
import FlipCard from "./FlipCard";
import Form from "./Form";
import Input from "./Input";
import List from "./List";
import Modal from "./Modal";
import Overlay from "./Overlay";
import Progress from "./Progress";
// import RadioBox from "./RadioBox";
import RadioList from "./RadioList";
import Steps from "./Steps";
import Table from "./Table";
import Tabs from "./Tabs";
import ToggleSwitch from "./ToggleSwitch";
import Tooltip from "./Tooltip";
import Uploader from "./Uploader";

storiesOf("Basic Components", module)
  .addDecorator(withKnobs)
  .add("Avatar", Avatar)
  .add("Breadcrumb", Breadcrumb)
  .add("Button", Button)
  .add("Card", Card)
  .add("Carousel", Carousel)
  // .add("CheckBox", CheckBox)
  .add("CheckList", CheckList)
  .add("Collapse", Collapse)
  .add("DatePicker", DatePicker)
  .add("DropDown", DropDown)
  .add("Editor", Editor)
  .add("Form", Form)
  .add("Input", Input)
  .add("List", List)
  .add("Modal", Modal)
  .add("FlipCard", FlipCard)
  .add("Overlay", Overlay)
  .add("Progress", Progress)
  // .add("RadioBox", RadioBox)
  .add("RadioList", RadioList)
  .add("Steps", Steps)
  .add("Table", Table)
  .add("Tabs", Tabs)
  .add("ToggleSwitch", ToggleSwitch)
  .add("Tooltip", Tooltip)
  .add("Uploader", Uploader);
