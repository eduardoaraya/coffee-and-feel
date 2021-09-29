import { rest } from 'msw';
import catalogData from '../data/catalog-mock';

const allProducts = () =>
  rest.get(`https://mockbackend.com/catalog/`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json([...catalogData]))
  );

const productSku = () =>
  rest.get(`https://mockbackend.com/catalog/product/:sku/`, (req, res, ctx) => {
    const { sku } = req.params;
    const data = catalogData.find((item) => item.sku === sku);
    return res(ctx.status(data ? 200 : 404), ctx.json(data));
  });

export const handlers = [allProducts(), productSku()];

export default handlers;
