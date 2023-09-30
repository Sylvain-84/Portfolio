import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import useWindowSize from "../utils/useWindowSize";

const Tech = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 768;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => {
        if (isMobile && technology.displayMobile == false) {
          return null;
        }
        return (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "");
