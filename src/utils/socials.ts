import InstagramIcon from '@/../public/assets/icons/instagram.webp';
import LinkedinIcon from '@/../public/assets/icons/linkedin-icon.svg';
import TikTokIcon from '@/../public/assets/icons/tiktok.webp';
import YoutubeIcon from '@/../public/assets/icons/youtube-icon.svg';
import CourseStudentsIcon from '@/../public/assets/icons/course-students-icon.svg';
import { StaticImageData } from 'next/image';

enum FollowType {
  followers = 'Followers',
  members = 'Members',
  subscribers = 'Subscribers',
  courseStudents = `Course Students`,
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
    source: InstagramIcon,
    name: 'instagram',
    socialLink: 'https://www.instagram.com/growing.abroad',
    followNumber: 5144,
    followType: FollowType.followers,
  },
  {
    source: LinkedinIcon,
    name: 'Linkedin',
    socialLink: 'https://www.linkedin.com/company/growing.abroad/',
    followNumber: 4040,
    followType: FollowType.followers,
  },
  {
    source: TikTokIcon,
    name: 'TikTok',
    socialLink: 'https://www.tiktok.com/@growing.abroad',
    followNumber: 5144,
    followType: FollowType.followers,
  },
];

export const socials2: ISocial[] = [
  {
    source: YoutubeIcon,
    name: 'Youtube',
    socialLink: 'https://www.youtube.com/channel/UCFlN7h2oM6fR5vfgPUQ-xLQ',
    followNumber: 51441,
    followType: FollowType.subscribers,
  },
  {
    source: CourseStudentsIcon,
    name: `Course Students`,
    socialLink: 'https://google.com/search?q=growing+abroad',
    followNumber: 300,
    followType: FollowType.courseStudents,
  },
];
