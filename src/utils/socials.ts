import InstagramIcon from "@/../public/assets/icons/instagram.jpg";
import LinkedinIcon from "@/../public/assets/icons/linkedin-icon.svg";
import TikTokIcon from "@/../public/assets/icons/tiktok.jpg";
import YoutubeIcon from "@/../public/assets/icons/youtube-icon.svg";
import OurCommunity from "@/../public/assets/icons/discord-logo.jpg";
import { StaticImageData } from "next/image";

enum FollowType {
  followers = "Followers",
  members = "Members",
  subscribers = "Subscribers",
  courseStudents = "Course Students",
  BusinessProfile  = "Business Profile",
  OurCommunity = "Our Community" 
}
export interface ISocial {
  name: string;
  source: StaticImageData | string;
  socialLink: string;
  followNumber: number;
  followType: FollowType;
}

export const socials1: ISocial[] = [
  {
    source: LinkedinIcon,
    name: "Linkedin",
    socialLink: "https://www.linkedin.com/company/growing.abroad/",
    followNumber: 0,
    followType: FollowType.BusinessProfile,
  },
  {
    source: InstagramIcon,
    name: "instagram",
    socialLink: "https://www.instagram.com/growing.abroad",
    followNumber: 8200,
    followType: FollowType.followers,
  },
  {
    source: TikTokIcon,
    name: "TikTok",
    socialLink: "https://www.tiktok.com/@growing.abroad",
    followNumber: 60000,
    followType: FollowType.followers,
  },
];

export const socials2: ISocial[] = [
  {
    source: YoutubeIcon,
    name: "Youtube",
    socialLink: "https://www.youtube.com/channel/UCFlN7h2oM6fR5vfgPUQ-xLQ",
    followNumber: 500,
    followType: FollowType.subscribers,
  },
  {
    source: OurCommunity,
    name: "Discord",
    socialLink: "https://google.com/search?q=growing+abroad",
    followNumber: 0,
    followType: FollowType.OurCommunity,
  },
];
