import InstagramIcon from '@assets/icons/instagram.webp';
import FacebookIcon from '@assets/icons/facebook.webp';
import TikTokIcon from '@assets/icons/tiktok.webp';
import YoutubeIcon from '@assets/icons/youtube.webp';

type FollowType = 'follower' | 'member' | 'subscriber' | 'course student'

export interface ISocial {
  name: string
  source: string
  socialLink: string
  followNumber: number
  followType: FollowType
}

export enum Instagram {
  name = 'instagram',
  socialLink = 'https://www.instagram.com/growing.abroad',
  followNumber = 5144,
  followType = 'follower'
}

export enum Facebook {
  name = 'facebook',
  socialLink = 'https://www.facebook.com/',
  followNumber = 100,
  followType = 'member'
}

export enum TikTok {
  name = 'tiktok',
  socialLink = 'https://www.tiktok.com/@growing.abroad',
  followNumber = 48800,
  followType = 'follower'
}

export enum Youtube {
  name = 'youtube',
  socialLink = 'https://www.youtube.com/channel/UCFlN7h2oM6fR5vfgPUQ-xLQ',
  followNumber = 244,
  followType = 'subscriber'
}

export enum Course {
  name = 'course',
  socialLink = 'https://google.com/search?q=growing+abroad', // temporarily while client does not have course link
  followNumber = 42000,
  followType = 'course student'
}

export const socials: ISocial[] = [
  {
    source: InstagramIcon,
    ...Instagram
  },
  {
    source: FacebookIcon,
    ...Facebook
  },
  {
    source: TikTokIcon,
    ...TikTok
  },
  {
    source: YoutubeIcon,
    ...Youtube
  },
  {
    source: FacebookIcon, // I've used facebook icon here because I do not know can I import assets from Canva
    ...Course
  }
]