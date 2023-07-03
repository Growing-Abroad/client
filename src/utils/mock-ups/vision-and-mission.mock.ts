import PuzzleImageDesktop from "@/../public/assets/vision-mission2-desktop.png";
import PuzzleImageMobile from "@/../public/assets/vision-mission2-mobile2.png";
import { IVisionAndMission } from "@pages/about-us/components/VisionAndMissionNew";

export default {
  backgroundSrc: {
    desktop: PuzzleImageDesktop.src,
    mobile: PuzzleImageMobile.src,
  },
  text1: {
    heading: "Vision",
    description:
    "Our Vision is to empower skilled talents globally making their dreams to work and live in Europe or Germany come true."

  },
  text2: {
    heading: "Mission",
    description:
    "Our Mission is to become the number 1 platform connecting professionals from all around the world with growing companies in the European and German job market. A platform where skilled talents can inspire and support each other to grow to their full potential."
  },
} satisfies IVisionAndMission;
