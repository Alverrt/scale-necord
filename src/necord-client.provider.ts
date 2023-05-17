import { Provider } from '@nestjs/common';
import { Client } from 'discord.js';
import { NecordModuleOptions } from './necord-options.interface';
import { NECORD_MODULE_OPTIONS } from './necord.constants';
import { ClusterClient } from 'discord-hybrid-sharding';

export const NecordClientProvider: Provider<Client> = {
  provide: Client,
  useFactory: (options: NecordModuleOptions) => {
    const client = new Client(options);
    client.cluster = new ClusterClient(client);
    return client;
  },
  inject: [NECORD_MODULE_OPTIONS]
};
