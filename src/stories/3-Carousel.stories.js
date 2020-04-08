import React from "react";
import { action } from "@storybook/addon-actions";
import { Carousel } from "react-mono";

export default {
  title: "Carousel",
  component: Carousel,
};


const itemRender = data => {
    return (
      <div
        style={{
          // backgroundImage: `url('${data.src}')`,
          // backgroundSize: "cover",
          width: "100%",
          height: "fit-content",
          color: "black"
        }}
      >
        <img src={data.src} style={{ width: "100%" }} />
        <span>{data.headline}</span>
      </div>
    );
  };
  
  const slideData = [
    {
      headline: "Nike Air Force 1 '07 Essential Icon Clash",
      src:
        "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/jrmc5yzbdqrloaat4prz/air-force-1-07-essential-icon-clash-shoe-B4HXPf.jpg"
    },
    {
      headline: "Nike Air Zoom Pegasus 36",
      src:
        "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/rcvjuoidxcq9irtbp5rk/air-zoom-pegasus-36-running-shoe-tBZsLn.jpg"
    },
    {
      headline: "Nike P-6000 Icon Clash",
      src:
        "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/rijdurhjtaopdca3qofp/p-6000-icon-clash-shoe-Cf06tP.jpg"
    },
    {
      headline: "Air Jordan 7 Retro",
      src:
        "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/t4ege635ov8rjpccsrj7/air-jordan-7-retro-shoe-2XK2cz.jpg"
    }
  ];

export const CenterCarousel = () => <Carousel
            heading="Carousel"
            slides={slideData}
            itemWidth={320}
            itemHeight={400}
            itemMargin={10}
            itemRender={itemRender}
            activeSlideAlignment="center"
          />