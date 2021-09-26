import { rest } from 'msw';
import { blogData } from '../data/blog-mock';

export const findAllBlog = () =>
  rest.get(`https://mockbackend.com/blog/`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json([...blogData]))
  );

export const findOneBlog = () =>
  rest.get(`https://mockbackend.com/blog/:id/`, (req, res, ctx) => {
    const { id } = req.params;
    const data = blogData.filter((value, index) => {
      return (value.id = id);
    });
    return res(ctx.status(200), ctx.json({ ...data[0] }));
  });

export const handlers = [findAllBlog(), findOneBlog()];

export default handlers;
