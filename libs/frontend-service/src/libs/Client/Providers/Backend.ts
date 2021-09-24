import { AxiosStatic, AxiosResponse, AxiosRequestConfig } from 'axios';
import ServiceProviderInterface from './ServiceProviderInterface';

export default class Server
  implements ServiceProviderInterface<AxiosResponse, AxiosRequestConfig>
{
  readonly BASE_URL = 'http://backend.server/';
  private client;

  constructor(private axios: AxiosStatic) {
    this.client = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  getPath(path: string): string {
    return this.BASE_URL + path;
  }

  async get<B>(path: string, options?: AxiosRequestConfig) {
    return await this.client.get<B>(this.getPath(path), options);
  }

  async post<Data, B>(path: string, data?: Data, options?: AxiosRequestConfig) {
    return await this.client.post<B>(this.getPath(path), options);
  }

  async put<Data, B>(path: string, data?: Data, options?: AxiosRequestConfig) {
    return await this.client.put<B>(this.getPath(path), options);
  }

  async delete<B>(path: string, options?: AxiosRequestConfig) {
    return await this.client.delete<B>(this.getPath(path), options);
  }
}
