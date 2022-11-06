interface ICategory {
  id: string
  name: string
}

interface IImage {
  src: string
  alt: string
}

export interface IPost {
  id: string
  title: string
  category: ICategory
  image: IImage
}

enum ApplicationCategory {
  id = '1',
  name = 'application'
}

enum GermanyCategory {
  id = '2',
  name = 'germany'
}

enum JobSearchCategory {
  id = '3',
  name = 'job research'
}

export const posts: IPost[] = [
  {
    id: '1',
    title: 'How to write a CV in German standards',
    category: ApplicationCategory,
    image: {
      src: 'https://via.placeholder.com/200x100',
      alt: 'How to write a CV in German standards'
    }
  },
  {
    id: '12',
    title: 'How to write a CV in German standards',
    category: GermanyCategory,
    image: {
      src: 'https://via.placeholder.com/200x100',
      alt: 'How to write a CV in German standards'
    }
  },
  {
    id: '123',
    title: 'How to write a CV in German standards',
    category: JobSearchCategory,
    image: {
      src: 'https://via.placeholder.com/200x100',
      alt: 'How to write a CV in German standards'
    }
  },
  {
    id: '1234',
    title: 'How to write a CV in German standards',
    category: ApplicationCategory,
    image: {
      src: 'https://via.placeholder.com/200x100',
      alt: 'How to write a CV in German standards'
    }
  },
  {
    id: '12345',
    title: 'How to write a CV in German standards',
    category: GermanyCategory,
    image: {
      src: 'https://via.placeholder.com/200x100',
      alt: 'How to write a CV in German standards'
    }
  },
  {
    id: '123456',
    title: 'How to write a CV in German standards',
    category: JobSearchCategory,
    image: {
      src: 'https://via.placeholder.com/200x100',
      alt: 'How to write a CV in German standards'
    }
  },
]