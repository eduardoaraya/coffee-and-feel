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

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: 'Blog post 2',
    category: getRandomMockCategory(),
    content: 'lorem ipsum',
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Alternative text',
    imgURL: 'https://via.placeholder.com/1500x700',
  },
  {
    id: 2,
    title: 'Blog post 2',
    category: getRandomMockCategory(),
    content: 'Lorem ipsum dolum sapet',
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Alternative Text taokey',
    imgURL: 'https://via.placeholder.com/1500',
  },
  {
    id: 3,
    title: 'Blog post 3',
    category: getRandomMockCategory(),
    content: 'Lorem ipsum dokey saletus',
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Ok alt text is here',
    imgURL: 'https://via.placeholder.com/1500',
  },
];
