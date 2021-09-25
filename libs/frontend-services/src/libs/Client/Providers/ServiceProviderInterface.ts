/* eslint-disable @typescript-eslint/no-unused-vars */
export default interface ServiceProviderInterface<Response, Options> {
  readonly BASE_URL: string;
  get<T>(path: string, options?: Options): Promise<Response>;
  post<Data, T>(
    path: string,
    data?: Data,
    options?: Options
  ): Promise<Response>;
  put<Data, T>(path: string, data?: Data, options?: Options): Promise<Response>;
  delete<T>(path: string, options?: Options): Promise<Response>;
}
