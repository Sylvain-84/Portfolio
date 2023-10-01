import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import useWindowSize from "../utils/useWindowSize";
import { fadeIn, textVariant } from "../utils/motion";

// No need to pass 'shouldDelay' anymore as it can be calculated from the index and displayCount
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  shouldDelay,
}) => {
  return (
    <motion.div
      variants={
        shouldDelay ? fadeIn("up", "spring", index * 0.5, 0.75) : undefined
      }
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};const Works = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 768;
  const initialDisplayCount = isMobile ? 4 : projects.length;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [shouldDelay, setShouldDelay] = useState(
    Array(initialDisplayCount).fill(true)
  );

  useEffect(() => {
    const newDisplayCount = isMobile ? 4 : projects.length;
    setDisplayCount(newDisplayCount);
    setShouldDelay(Array(newDisplayCount).fill(true));
  }, [isMobile]);

  const handleLoadMore = () => {
    const newDelayStatus = [...Array(6).fill(false)]; // No delay for new cards
    setShouldDelay((prevDelay) => [...prevDelay, ...newDelayStatus]);
    setDisplayCount((prevCount) => prevCount + 6);
  };

  // const filteredProjects = projects.slice(0, displayCount);
  const filteredProjects = projects
    .filter((project) => !isMobile || project.displayMobile)
    .slice(0, displayCount);


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projets</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Les projets suivants illustrent mes compétences et mon expérience
          acquis tout au long de ma carrère. Ils témoignent de ma capacité à
          résoudre des problèmes complexes, à travailler avec différentes
          technologies, à gérer des projets de manière efficace et autonome.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {console.log(filteredProjects)}
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            shouldDelay={shouldDelay[index]}
          />
        ))}
      </div>

      {/* Show the "More" button if there are more projects to show */}
      {displayCount < projects.length && (
        <button className="mt-20 mb-20" onClick={handleLoadMore}>
          More
        </button>
      )}
    </>
  );
};

export default SectionWrapper(Works, "project");
