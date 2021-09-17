export type BlogPost = {
  id: number;
  title: string;
  imgURL: string;
  imgAlt: string;
  content: string;
  category: string;
  date: Date | string;
};

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: 'Blog post 1',
    category: 'Category',
    content: 'lorem ipsum',
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Alternative text',
    imgURL: 'https://via.placeholder.com/1500',
  },
  {
    id: 2,
    title: 'Blog post 2',
    category: 'Category',
    content: 'Lorem ipsum dolum sapet',
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Alternative Text taokey',
    imgURL: 'https://via.placeholder.com/1500',
  },
  {
    id: 3,
    title: 'Blog post 3',
    category: 'Category 2',
    content: 'Lorem ipsum dokey saletus',
    date: new Date(Date.now()).toJSON(),
    imgAlt: 'Ok alt text is here',
    imgURL: 'https://via.placeholder.com/1500',
  },
];
