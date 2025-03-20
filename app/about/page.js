import React from "react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import ImageFillWrapper from "../components/ImageFillWrapper";
import AboutSkills from "../components/about/AboutSection";
import SocialMedia from "../components/about/SocialMedia";

const Page = () => {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-[512px] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full relative shrink-0">
          <ImageFillWrapper
            className="w-full h-full"
            image_link={
              "https://yemolfbfuywasvhymyos.supabase.co/storage/v1/object/public/Blog/about/intro.jpeg"
            }
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
          <AboutSkills />
          <SocialMedia />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
