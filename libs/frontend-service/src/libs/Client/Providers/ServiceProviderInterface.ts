export default interface ServiceProviderInterface<Response, Options> {
  readonly BASE_URL: string;
  get(path: string, options?: Options): Promise<Response>;
  post<Data>(path: string, data?: Data, options?: Options): Promise<Response>;
  put<Data>(path: string, data?: Data, options?: Options): Promise<Response>;
  delete(path: string, options?: Options): Promise<Response>;
}
