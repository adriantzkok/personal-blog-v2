import React from "react";
import { ABOUT_ME_DESC } from "@/app/index/AboutIndex";

const AboutSection = () => {
  return (
    <div className="flex flex-col w-full p-6 gap-y-6">
      <h1 className="sm:text-2xl md:text-4xl font-bold mb-1">About Me</h1>
      <p className="sm:text-s md:text-xl">{ABOUT_ME_DESC}</p>
    </div>
  );
};

export default AboutSection;
