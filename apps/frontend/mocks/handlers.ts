import { rest } from 'msw';
import { blogData } from './data/blog';

const findAllBlog = rest.get('/api/blog', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ data: blogData }));
});

const findOneBlog = rest.get('/api/blog/:id', (req, res, ctx) => {
  const { id } = req.params;

  const data = blogData.filter((value, index) => {
    return (value.id = id);
  });

  return res(ctx.status(200), ctx.json({ data: data }));
});

export const handlers = [findAllBlog, findOneBlog];
