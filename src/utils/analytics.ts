import { redis } from "@/lib/redis";

type AnalyticsArgs = {
  retention?: number;
};

export class Analytics {
  private retention: number = 60 * 60 * 24 * 7;

  constructor(opts?: AnalyticsArgs) {
    if (opts?.retention) this.retention = opts.retention;
  }
  // namespace can be any page like contact me or anything
  async track(namespace: string, event: object = {}) {
    // database call to persist the events

    const key = `analytics::${namespace}`;

    await redis.hincrby(key, JSON.stringify(event), 1);
    // hash increment by
  }
}

export const analytics = new Analytics({ retention: 3600 });
