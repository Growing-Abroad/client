import Castle from "@/../public/assets/Photos-Main-Page/cover-letter-optimization.jpg";
import CvOptimization from "@/../public/assets/Photos-Main-Page/CV-Optimization.jpg";
import JobSearchStrategy from "@/../public/assets/Photos-Main-Page/Job-Search-Strategy.jpg";

import CoachingPackage from "@/../public/assets/Photos-Main-Page/Coaching-Package.jpg";

import OnlineCourse from "@/../public/assets/Photos-Main-Page/online-course-success.jpg";
import JobInterview from "@/../public/assets/Photos-Main-Page/job-interview-coaching.jpg";
import LinkedInOptimization from "@/../public/assets/Photos-Main-Page/LinkedIn-Optimization.jpg";
import { IImage } from "./blog_posts";

interface IDescription {
  id: string;
  content: string;
}

type descriptions = readonly [IDescription, IDescription, IDescription];

export interface IService {
  id: string;
  title: string;
  subtitle: string;
  image: IImage;
  descriptions: descriptions;
  hasMoreInfo: boolean;
}

export const services: IService[] = [
  {
    id: "1",
    title: "Job Interview Preparation",
    subtitle: "To rock every Job Interview",
    image: {
      src: JobInterview.src,
      alt: "Job Interview Preparation",
    },
    descriptions: [
      {
        id: "9",
        content:
          "<span>Videos and Workbook</span> to perfectly prepare for every job interview",
      },
      {
        id: "99",
        content:
          "Feedback with <span>Video Analyzis</span> on how to improve your appearance",
      },
      {
        id: "999",
        content:
          "Bonus material with the most asked interview questions and how to prepare for them",
      },
    ],
    hasMoreInfo: false,
  },
  {
    id: "12",
    title: "Online Course",
    subtitle: "How to land your dream job in Germany or Europe",
    image: {
      src: OnlineCourse.src,
      alt: "Online Course",
    },
    descriptions: [
      {
        id: "1",
        content:
          "Learn all the steps you have to take to land your <span>Dream Job in Europe or Germany</span>",
      },
      {
        id: "12",
        content:
          "Access to <span>50+ Videos, Workbook, Community templates</span> and much more",
      },
      {
        id: "123",
        content:
          "Access to the entire online course platform to build a <span>successful career abroad</span>",
      },
    ],
    hasMoreInfo: true,
  },
  {
    id: "123",
    title: "CV Optimization",
    subtitle: "To have a CV in german standards",
    image: {
      src: CvOptimization.src,
      alt: "CV Optimization",
    },
    descriptions: [
      {
        id: "4",
        content:
          "<span>Videos and Workbook<span> how to effectively optimize your CV for the German market",
      },
      {
        id: "45",
        content:
          "<span>Personal Feedback</span> rounds and insider tips to elevate your CV from all the others",
      },
      {
        id: "456",
        content:
          "Final corrections to have a <span>perfectly optimized CV</span> to get every job interview",
      },
    ],
    hasMoreInfo: false,
  },
  {
    id: "1234",
    title: "Cover Letter Optimization",
    subtitle: "To have a Cover letter in german standards",
    image: {
      src: Castle.src,
      alt: "To Rock every Job Interview",
    },
    descriptions: [
      {
        id: "6",
        content:
          "<span>Videos and Workbook</span> how to effectively optimize your Cover Letter for the German market",
      },
      {
        id: "67",
        content:
          "<span>Personal Feedback</span> and insider tips to elevate your Cover Letter from all the others",
      },
      {
        id: "678",
        content:
          "Final corrections to have a <span>perfectly optimized Cover Letter</span> to get every job interview",
      },
    ],
    hasMoreInfo: false,
  },
  {
    id: "123456",
    title: "LinkedIn Optimization",
    subtitle: "To get contacted by german recruiters",
    image: {
      src: LinkedInOptimization.src,
      alt: "Online Course",
    },
    descriptions: [
      {
        id: "10",
        content:
          "<span>Video and Workbook<span> how to effectively optimize your LinkedIn Profile for the German market",
      },
      {
        id: "1011",
        content:
          "<span>Personal Feedback</span> and insider tips to elevate your LinkedIn Profile from all the others",
      },
      {
        id: "101112",
        content:
          "Final corrections to have a <span>perfectly optimized LinkedIn Profile</span> to get 5 times more job requests",
      },
    ],
    hasMoreInfo: true,
  },
  {
    id: "12345",
    title: "Job Search Strategy",
    subtitle: "To find the best jobs in the market",
    image: {
      src: JobSearchStrategy.src,
      alt: "Online Course",
    },
    descriptions: [
      {
        id: "8",
        content:
          "<span>Videos and Workbook</span> how to effectively search for jobs on the German market",
      },
      {
        id: "89",
        content:
          "<span>Personal Coaching Call</span> to develop your individual Job Search Strategy based on your strengths and goals",
      },
      {
        id: "890",
        content:
          "Templates with the most used Job Platforms, Companies which hire English speakers and your personal Application tracker",
      },
    ],
    hasMoreInfo: true,
  },
  {
    id: "1234567",
    title: "Coaching Package",
    subtitle: "To be fully prepared for the german market",
    image: {
      src: CoachingPackage.src,
      alt: "Coaching Package",
    },
    descriptions: [
      {
        id: "18",
        content:
          "<span>CV, Cover Letter and LinkedIn Optimization</span> for the German market",
      },
      {
        id: "1811",
        content:
          "<span>Individual Job Search Strategy</span> with the focus on your strengths and goals",
      },
      {
        id: "108112",
        content:
          "<span>Job Interview Preparation</span> to get every job you wish for",
      },
    ],
    hasMoreInfo: true,
  },
];
