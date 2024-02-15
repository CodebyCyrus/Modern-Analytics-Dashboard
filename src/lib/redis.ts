import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://eu2-worthy-rodent-31062.upstash.io",
  token: process.env.REDIS_KEY!,
});
