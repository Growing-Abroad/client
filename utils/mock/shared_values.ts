import ImageMock from '@../../../public/assets/aboutus/job-interview-coaching.webp'

interface ISharedValues {
  title: string
  body: string
  image: string
}

export const sharedValues: ISharedValues[] = [
  {
    title: "Inspiration",
    body: "Inspiration is the source to dream bigger, push harder and lead to a more fulfilling life. We want to inspire and motivate other people so that they can discover new possibilities for themselves and overcome boundaries.",
    image: ImageMock
  },
  {
    title: "Trust",
    body: "To show yourself in your full potential is only possible with trust.  We want to create an environment where people of all nations and backgrounds can meet on the same level of inclusiveness, integrity and diversity.",
    image: ImageMock
  },
  {
    title: "Customer Centric",
    body: "Our customers are the heart of our work. We truly want to understand the needs and concerns of our customers to create a meaningful experience and build a lasting relationship.",
    image: ImageMock
  }

]