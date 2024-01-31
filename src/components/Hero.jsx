import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      className={`relative w-full justify-center h-screen mx-auto -mt-2`}
    >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 -mt-8`}
      >
        <div className="flex flex-col justify-center items-center mt-5 -">
          <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Uzair</span>
          </h1>
          <p className={`${styles.heroSubText} -mt-2 text-white-100`}>
            Elevating digital experiences: crafting
            <br className="sm:block hidden" />
            exceptional Full Stack web magic!
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-12 bottom-28 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[30px] h-[55px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
