import Img1 from "@/../public/assets/Photos-Main-Page/GrowingAbroadUanBusiness_Canva.png";
import Img2 from "@/../public/assets/Photos-Main-Page/high-five.jpg";
import Img3 from "@/../public/assets/Photos-Main-Page/Manu-Business_Canva.jpg";
import { ICarouselData } from "@/components/Fancy-carousel";

const candidatesDiscoverMockup: ICarouselData[] = [
  {
    imgSrc: Img1,
    title: "Uanderson Silva",
    from: `Co-founder`,
    texts: [
      `MSc + MBA in Germany University`,
      `Ex Bosch, Accenture, Allianz,`,
      `Management Experience`,
    ],
    href: "https://www.linkedin.com/feed/",
    countryFlag: "br",
  },
  {
    imgSrc: Img3,
    title: "Manuel Feneberg",
    from: `Co-founder`,
    texts: [
      `Management & University Trainer`,
      `Certified Professional Coach`,
      `Professional Actor`,
    ],
    href: "https://www.linkedin.com/feed/",
    countryFlag: "us",
  },
];

export default candidatesDiscoverMockup;
