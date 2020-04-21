import React from "react";

/** Plugins */
import { text, boolean, select, number, color } from "@storybook/addon-knobs";

/** Components */
import { Card } from "react-mono";

const bannerTypeOptions = {
  video: "video",
  image: "image",
};

const story = () => (
  <Card
    sourceImg={text(
      "sourceImg",
      "https://storage.googleapis.com/proudcity/alpha/uploads/2016/10/techcrunch.jpg"
    )}
    width={number("width", 300)}
    bordered={boolean("bordered", true)}
    footer={<div>Footer</div>}
    bannerType={select("bannerType", bannerTypeOptions, "video")}
    banner={{
      src: text(
        "banner src",
        "https://js.freefrontend.com/img/framers-logo-animation-javascript-0196.mp4"
      ),
    }}
  >
    <div>
      <strong>TechCrunch</strong>
      <div>
        ‘A city where you can pilot almost anything and figure out if it’s going
        to work’
      </div>
    </div>
  </Card>
);

export default story;
