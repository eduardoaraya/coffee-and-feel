import { rest } from 'msw';

const loginRequest = rest.post('login', (req, res, ctx) => {
  sessionStorage.setItem('is-authenticated', 'true');

  return res(ctx.status(200));
});

const userRequest = rest.get('/user', (req, res, ctx) => {
  const isAuthenticated = sessionStorage.getItem('is-authenticated');

  if (!isAuthenticated) {
    return res(ctx.status(403), ctx.json({ errorMessage: 'Not authorized' }));
  }

  return res(ctx.status(200), ctx.json({ username: 'admin' }));
});

const testRequest = rest.get('/stuff', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ items: [1, 2, 3, 4, 5, 6] }));
});

export const handlers = [loginRequest, userRequest, testRequest];
