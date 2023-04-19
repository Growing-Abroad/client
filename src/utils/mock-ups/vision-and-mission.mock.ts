import PuzzleImage from "@/../public/assets/puzzle.webp";
import { IVisionAndMission } from "@pages/about-us/components/VisionAndMissionNew";

export default {
  backgroundSrc: PuzzleImage.src,
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
