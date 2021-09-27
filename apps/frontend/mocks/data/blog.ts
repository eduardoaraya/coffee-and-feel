import { mockBlogPostHTML } from './mockHTMLPost';
import * as faker from 'faker';

export type BlogPost = {
  id: number;
  title: string;
  imgURL: string;
  imgAlt: string;
  content: string;
  category: string;
  date: Date | string;
};

const mockCategoryList = [
  'Matemática',
  'Desenvolvimento',
  'Marketing',
  'Anúncios',
  'Esportes',
  'Vida',
  'Curiosidades',
  'Estrutura de dados',
  'Notícias',
];

const getRandomMockCategory = () => {
  return mockCategoryList[Math.floor(Math.random() * mockCategoryList.length)];
};

const randomImage = () =>
  `${faker.image.business(1300, 600)}?random=${Math.floor(
    Math.random() * 1000 + 1
  )}`;

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: 'Blog post 1',
    category: getRandomMockCategory(),
    content: mockBlogPostHTML,
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Alternative text',
    imgURL: randomImage(),
  },
  {
    id: 2,
    title: 'Blog post 2',
    category: getRandomMockCategory(),
    content: 'Lorem ipsum dolum sapet',
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Alternative Text taokey',
    imgURL: randomImage(),
  },
  {
    id: 3,
    title: 'Blog post 3',
    category: getRandomMockCategory(),
    content: 'Lorem ipsum dokey saletus',
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Ok alt text is here',
    imgURL: randomImage(),
  },
  {
    id: 4,
    title: 'Blog post 4',
    category: getRandomMockCategory(),
    content: mockBlogPostHTML,
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Alternative text',
    imgURL: randomImage(),
  },
  {
    id: 5,
    title: 'Blog post 5',
    category: getRandomMockCategory(),
    content: 'Lorem ipsum dolum sapet',
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Alternative Text taokey',
    imgURL: randomImage(),
  },
  {
    id: 6,
    title: 'Blog post 6',
    category: getRandomMockCategory(),
    content: 'Lorem ipsum dokey saletus',
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Ok alt text is here',
    imgURL: randomImage(),
  },
  {
    id: 7,
    title: 'Blog post 7',
    category: getRandomMockCategory(),
    content: mockBlogPostHTML,
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Alternative text',
    imgURL: randomImage(),
  },
  {
    id: 8,
    title: 'Blog post 8',
    category: getRandomMockCategory(),
    content: 'Lorem ipsum dolum sapet',
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Alternative Text taokey',
    imgURL: randomImage(),
  },
  {
    id: 9,
    title: 'Blog post 9',
    category: getRandomMockCategory(),
    content: 'Lorem ipsum dokey saletus',
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Ok alt text is here',
    imgURL: randomImage(),
  },
];
