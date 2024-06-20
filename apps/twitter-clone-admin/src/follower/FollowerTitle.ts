import { Follower as TFollower } from "../api/follower/Follower";

export const FOLLOWER_TITLE_FIELD = "following";

export const FollowerTitle = (record: TFollower): string => {
  return record.following?.toString() || String(record.id);
};
