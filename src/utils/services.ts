import Castle from "@/../public/assets/Photos-Main-Page/Castle-Neuschwanstein.webp";
import CvOptimization from "@/../public/assets/Photos-Main-Page/CV-Optimization.webp";
import CurriculumVitae from "@/../public/assets/Photos-Main-Page/Curriculum-Vitae.webp";
import OnlineCourse from "@/../public/assets/Photos-Main-Page/online-course-success.webp";
import JobInterview from "@/../public/assets/Photos-Main-Page/job-interview-coaching.webp";
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
          "<strong>Guideline and Workbook</strong> to perfectly prepare for your job interview",
      },
      {
        id: "99",
        content:
          "<strong>Feedback</strong> with <strong>Video Analysis</strong> on how to improve your appearance",
      },
      {
        id: "999",
        content:
          "Templates with the <strong>most asked interview questions</strong> and how to prepare for them",
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
          "Learn all the steps you have to take to land your <strong>Dream Job in Europe or Germany</strong>",
      },
      {
        id: "12",
        content:
          "Access to <strong>50+ Videos, Workbook, Community templates</strong> and much more",
      },
      {
        id: "123",
        content:
          "<strong>Lifetime access</strong> to the entire online course to build a successful career abroad",
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
          "<strong>Guideline and Workbook</strong> how to effectively optimize your CV for the German market",
      },
      {
        id: "45",
        content:
          "<strong>Personal Feedback</strong> rounds and insider tips to elevate your CV from all the others",
      },
      {
        id: "456",
        content:
          "Final corrections to have a <strong>perfectly optimized CV</strong> to get every job interview",
      },
    ],
    hasMoreInfo: false,
  },
  {
    id: "1234",
    title: "Job Interview Preparation",
    subtitle: "To rock every Job Interview",
    image: {
      src: Castle.src,
      alt: "Job Interview Preparation",
    },
    descriptions: [
      {
        id: "6",
        content:
          "Guideline and Workbook to perfectly prepare for your job interview",
      },
      {
        id: "67",
        content:
          "Feedback with Video Analysis on how to improve your appearance",
      },
      {
        id: "678",
        content:
          "Templates with the most asked interview questions and how to prepare for them",
      },
    ],
    hasMoreInfo: false,
  },
  {
    id: "12345",
    title: "Online Course",
    subtitle: "How to land your dream job in Germany or Europe",
    image: {
      src: CurriculumVitae.src,
      alt: "Online Course",
    },
    descriptions: [
      {
        id: "8",
        content:
          "Learn all the steps you have to take to land your DREAM JOB in GERMANY",
      },
      {
        id: "89",
        content:
          "Access to 50+ Videos, Workbook, Community, Templates and much more",
      },
      {
        id: "890",
        content:
          "Lifetime access to the entire online course to build a successful career abroad",
      },
    ],
    hasMoreInfo: true,
  },
  {
    id: "123456",
    title: "LinkedIn Optimization",
    subtitle: "To get contacted by german recruiters",
    image: {
      src: CurriculumVitae.src,
      alt: "Online Course",
    },
    descriptions: [
      {
        id: "10",
        content:
          "Guideline and Workbook how to effectively optimize your LinkedIn Profile for the German market",
      },
      {
        id: "1011",
        content:
          "Final corrections to have a perfectly optimized LinkedIn Profile to get every job interview",
      },
      {
        id: "101112",
        content:
          "Lifetime access to the entire online course to build a successful career abroad",
      },
    ],
    hasMoreInfo: true,
  },
];
