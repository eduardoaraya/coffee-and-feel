import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import ServiceProviderInterface from './Providers/ServiceProviderInterface';
import Backend from './Providers/Backend';

export class Client {
  constructor(
    private serverProvider: ServiceProviderInterface<
      AxiosResponse,
      AxiosRequestConfig
    >
  ) {}

  get api() {
    return this.serverProvider;
  }
}

const backend = new Backend(axios);
export default new Client(backend);
