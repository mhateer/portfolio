"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a{" "}
        <span className="font-medium">Bachelor's degree in Computer Science</span>  
        ,I decided to pursue my passion for programming, I learned building  
        high-performance web and mobile applications. I have a  
        strong foundation in clean architecture, modern UI/UX, and scalable  
        solutions. <span className="italic">I thrive on problem-solving</span> and  
        turning complex challenges into seamless digital experiences.  

        I stay ahead of industry trends, continuously learning and refining my  
        skills to deliver innovative,  
        user-centric applications. If you're looking for a developer who blends  
        <span className="font-medium"> technical expertise</span> with a passion  
        for design and performance, let’s connect!
      </p>

      <p>
        <span className="italic">Beyond coding</span>, I love exploring design  
        trends, learning about new web technologies, and optimizing user  
        experiences. I also enjoy{" "}
        <span className="font-medium">continuous learning</span>, staying updated  
        with <span className="font-medium">the latest frameworks</span>, and  
        expanding my knowledge in software architecture. In my free time, I  
        explore <span className="font-medium">tech innovations</span> and  
        experiment with new tools to enhance development workflows.
      </p>

    </motion.section>
  );
}
