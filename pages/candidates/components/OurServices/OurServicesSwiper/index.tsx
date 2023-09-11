import "swiper/swiper-bundle.css";
import * as S from "@/styles/pages-styles/candidates/OurServices/OurServicesSwiper/index.styles";
// import { services } from "./services";
import SwiperCore, { Navigation, Pagination } from "swiper";
import OurServicesCard from "../OurServicesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import Castle from "@/../public/assets/Photos-Main-Page/cover-letter-optimization.jpg";
import CvOptimization from "@/../public/assets/Photos-Main-Page/CV-Optimization.jpg";
import JobSearchStrategy from "@/../public/assets/Photos-Main-Page/Job-Search-Strategy.jpg";
import OnlineCourseCVOptimization from "@/../public/assets/Photos-Main-Page/curriculo.jpg";
import CoachingPackage from "@/../public/assets/Photos-Main-Page/Coaching-Package.jpg";
import OnlineCourseCoverLetterOptimization from "@/../public/assets/Photos-Main-Page/OnlineCourseCoverLetterOptimization.jpg";
import JobInterviewPreparation from "@/../public/assets/Photos-Main-Page/JobInterviewPreparation.jpg";

import OnlineCourse from "@assets/Photos-Main-Page/online-course-success.jpg";
import JobInterview from "@assets/Photos-Main-Page/job-interview-coaching.jpg";
import LinkedInOptimization from "@/../public/assets/Photos-Main-Page/LinkedIn-Optimization.jpg";
// import { IImage } from "../../../../../src/utils/blog_posts";

export interface IImage {
  src: string
  alt: string
}
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
    id: "https://growingabroad.myelopage.com/s/growingabroad/online-course-cv-optimization",
    title: "Online Course: CV Optimization",
    subtitle: "Video lessons to convince german hiring managers with your CV",
    image: {
      src: OnlineCourseCVOptimization?.src,
      alt: "Online Course: CV Optimization",
    },
    descriptions: [
      {
        id: "9",
        content:
          "5 Video lessons to learn step by step how to optimize your CV for the German market",
      },
      {
        id: "99",
        content:
          "Interactive Workbook with key insights on the Optimization + Coaching tasks",
      },
      {
        id: "999",
        content:
          "Bonus material: CV Templates",
      },
    ],
    hasMoreInfo: false,
  },
  {
    id: "https://growingabroad.myelopage.com/s/growingabroad/online-course-cover-letter-optimization",
    title: "Online Course: Cover Letter Optimization",
    subtitle: "Video lessons to convince german hiring managers with your cover letter",
    image: {
      src: OnlineCourseCoverLetterOptimization?.src,
      alt: "Online Course: CV Optimization",
    },
    descriptions: [
      {
        id: "9",
        content:
        "2 Video lessons to learn step by step how to optimize your Cover Letter for the German market",
      },
      {
        id: "99",
        content:
        "Interactive Workbook with key insights on the Optimization + Coaching tasks",
      },
      {
        id: "999",
        content:
        "Bonus material: Cover Letter templates",
      },
    ],
    hasMoreInfo: false,
  },
  {
    id: "https://growingabroad.myelopage.com/s/growingabroad/job-interview-online-course",
    title: "Online Course: Job Interview Preparation",
    subtitle: "Video lessons to nail your next german job interview",
    image: {
      src: JobInterviewPreparation?.src,
      alt: "Online Course: Job Interview Preparation",
    },
    descriptions: [
      {
        id: "9",
        content:
        "6 Video lessons to learn step by step how to convince in job interviews",
      },
      {
        id: "99",
        content:
        "Interactive Workbook with key insights on the job interview process + Coaching tasks",
      },
      {
        id: "999",
        content:
        "Bonus material: List of the 80 most typical interview questions",
      },
    ],
    hasMoreInfo: false,
  },
  {
    id: "Job-Interview-Preparation",
    title: "Coaching: Job Interview Preparation",
    subtitle: "To rock every Job Interview in Germany",
    image: {
      src: JobInterview?.src,
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
          "Personal Feedback with <span>Video Analyzis</span> on how to improve your appearance",
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
    id: "online-course",  
    title: "Coaching: Dream Job",
    subtitle: "How to land your dream job in Germany or Europe",
    image: {
      src: OnlineCourse?.src,
      alt: "Online Course",
    },
    descriptions: [
      {
        id: "1",
        content:
          "Learn all the steps to land your <span>Dream Job in Europe or Germany</span>",
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
    id: "CV-Optimization",
    title: "Coaching: CV Optimization",
    subtitle: "To have a CV in german standards",
    image: {
      src: CvOptimization?.src,
      alt: "CV Optimization",
    },
    descriptions: [
      {
        id: "4",
        content:
          "<span>Videos and Workbook<span> how to effectively optimize your CV",
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
    id: "Cover-Letter-Optimization",
    title: "Coaching: Cover Letter Optimization",
    subtitle: "To have a Cover letter in german standards",
    image: {
      src: Castle?.src,
      alt: "To Rock every Job Interview",
    },
    descriptions: [
      {
        id: "6",
        content:
          "<span>Videos and Workbook</span> how to effectively optimize your Cover Letter",
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
    id: "LinkedIn-Optimization",
    title: "Coaching: LinkedIn Optimization",
    subtitle: "To get contacted by german recruiters",
    image: {
      src: LinkedInOptimization?.src,
      alt: "Online Course",
    },
    descriptions: [
      {
        id: "10",
        content:
          "<span>Video and Workbook<span> how to effectively optimize your LinkedIn Profile",
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
    id: "Job-Search-Strategy",
    title: "Coaching: Job Search Strategy",
    subtitle: "To find the best jobs in the market",
    image: {
      src: JobSearchStrategy?.src,
      alt: "Online Course",
    },
    descriptions: [
      {
        id: "8",
        content:
          "<span>Videos and Workbook</span> how to effectively search for jobs",
      },
      {
        id: "89",
        content:
          "<span>Personal Coaching Call</span> to develop your individual Job Search Strategy based on your strengths and goals",
      },
      {
        id: "890",
        content:
        "<span>Bonus:</span> Most used Job Platforms, Companies hiring English speakers, Application tracker",
      },
    ],
    hasMoreInfo: true,
  },
  {
    id: "Coaching-Package",
    title: "Coaching: Coaching Package",
    subtitle: "To be fully prepared for the german market",
    image: {
      src: CoachingPackage?.src,
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


export default function OurServicesSwiper() {
  SwiperCore.use([Navigation, Pagination]);


  return (
    <S.Container>
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          940: {
            slidesPerView: 2,
            spaceBetween: 53,
          },
          1230: {
            slidesPerView: 3,
            spaceBetween: 53,
          },
        }}
        navigation
        pagination
        autoplay
        className="mySwiper swiper-container"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id} zoom>
            <OurServicesCard {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
}
