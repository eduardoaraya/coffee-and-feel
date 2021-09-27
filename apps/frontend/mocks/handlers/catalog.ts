import { rest } from 'msw';
import catalogData from '../data/catalog-mock';

const allProducts = () =>
  rest.get(`https://mockbackend.com/catalog/`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json([...catalogData]))
  );

export const handlers = [allProducts()];

export default handlers;
