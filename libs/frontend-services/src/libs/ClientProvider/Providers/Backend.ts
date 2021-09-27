import {
  AxiosStatic,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInstance,
} from 'axios';

export default class Backend {
  readonly BASE_URL = 'https://mockbackend.com/';

  private client: AxiosInstance;

  constructor(private axios: AxiosStatic) {
    this.client = this.axios.create({
      baseURL: this.BASE_URL,
    });
  }

  getPath(path: string): string {
    return this.BASE_URL + path;
  }

  async get<T>(
    path: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await this.client.get<T>(this.getPath(path), options);
  }

  async post<Data, T>(
    path: string,
    data?: Data,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await this.client.post<T>(this.getPath(path), data, options);
  }

  async put<Data, T>(
    path: string,
    data?: Data,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await this.client.put<T>(this.getPath(path), data, options);
  }

  async delete<T>(
    path: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await this.client.delete<T>(this.getPath(path), options);
  }
}
