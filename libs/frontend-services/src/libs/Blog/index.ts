import provider, { ClientProvider } from '../ClientProvider';

export type BlogPost = {
  id: number;
  title: string;
  imgURL: string;
  imgAlt: string;
  content: string;
  category: string;
  date: Date | string;
};

export class BlogService {
  constructor(private readonly provider: ClientProvider) {}

  async getAllPosts() {
    const { data } = await this.provider
      .getClient()
      .get<BlogPost[]>('posts', {});

    return data;
  }

  async getPost(id: string) {
    const { data } = await this.provider
      .getClient()
      .get<BlogPost>('posts/' + id, {});
    return data;
  }
}

export const getInstanceService = () => new BlogService(provider);

export default getInstanceService;
