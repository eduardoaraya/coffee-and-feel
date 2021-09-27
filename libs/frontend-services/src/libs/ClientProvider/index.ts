import axios from 'axios';
import Backend from './Providers/Backend';

export class ClientProvider {
  constructor(private serverProvider: Backend) {}

  getClient(): Backend {
    return this.serverProvider;
  }
}

const backend = new Backend(axios);
export default new ClientProvider(backend);
