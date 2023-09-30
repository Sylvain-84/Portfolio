import React, { Suspense } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import useWindowSize from "../utils/useWindowSize";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
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
};

const Works = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 768;

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
        <Suspense fallback={<div>Loading...</div>}>
          {projects.map((project, index) => {
            if (isMobile && project.displayMobile == false) {
              return null;
            }
            return (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            );
          })}
        </Suspense>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
