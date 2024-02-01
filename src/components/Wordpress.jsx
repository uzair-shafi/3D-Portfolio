import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { link } from "../assets";
import { SectionWrapper } from "../hoc";
import { wprojects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl relative sm:w-[360px] w-full"
      >
        <div className=" w-full h-full">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
        </div>

        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="flex gap-3 violet-gradientbut py-2 px-4 rounded-xl outline-none w-fit text-white font-semi-bold mt-5 text-[14px] items-center cursor-pointer"
        >
          {" "}
          See Live
          <div>
            <img
              src={link}
              className="w-[15px] h-[15px] object-contain items-center"
            />
          </div>
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
};

const Wordpress = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center mt-0 `}>
          Other Projects
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Wordpress.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-0 "
        ></motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7 justify-center">
        {wprojects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Wordpress, "");
