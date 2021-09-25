import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import ServiceProviderInterface from './Providers/ServiceProviderInterface';
import Backend from './Providers/Backend';

type Provider = ServiceProviderInterface<AxiosResponse, AxiosRequestConfig>;

export class ClientProvider {
  constructor(private serverProvider: Provider) {}

  getClient(): Provider {
    return this.serverProvider;
  }
}

const backend = new Backend(axios);
export default new ClientProvider(backend);
