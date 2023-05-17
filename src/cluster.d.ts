import { Client } from 'discord.js';
import { ClusterClient } from 'discord-hybrid-sharding';

declare module 'discord.js' {
  export interface Client {
    cluster: ClusterClient<Client<boolean>>;
  }
}
export {};
