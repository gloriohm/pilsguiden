import PocketBase from 'pocketbase';

const url = 'https://moist-wallet.pockethost.io';
export const client = new PocketBase(url);

client.autoCancellation(false);