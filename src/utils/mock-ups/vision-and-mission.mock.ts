import PuzzleImageDesktop from "@/../public/assets/vision-mission2-desktop.png";
import PuzzleImageMobile from "@/../public/assets/vision-mission2-mobile2.png";
import { IVisionAndMission } from "@pages/about-us/components/VisionAndMissionNew";

export default {
  backgroundSrc: {
    desktop: PuzzleImageDesktop.src,
    mobile: PuzzleImageMobile.src,
  },
  text1: {
    heading: "Mission",
    description:
      "Our Mission is to show people how to grow and rise up to their full potential to make their dreams come true.",
  },
  text2: {
    heading: "Vision",
    description:
      "Our Vision is to create a platform that brings people together as a community with similar goals, where people can share their stories and inspire others.",
  },
} satisfies IVisionAndMission;
