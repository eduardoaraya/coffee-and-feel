import catalogHandlers from './handlers/catalog';
import blogHandlers from './handlers/blog';

export const handlers = [...catalogHandlers, ...blogHandlers];
