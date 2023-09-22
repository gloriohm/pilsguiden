import PocketBase from "pocketbase";

const url = "https://moist-wallet.pockethost.io";
const client = new PocketBase(url);

client.autoCancellation(false);

const bars = await client.collection("Bars").getFullList({});
const barsPinted = bars.map((bar) => ({
    ...bar,
    pint: Math.floor(bar.price / bar.size / 2),
}));

export const barsPintedSorted = [...barsPinted].sort((a, b) => a.pint - b.pint);