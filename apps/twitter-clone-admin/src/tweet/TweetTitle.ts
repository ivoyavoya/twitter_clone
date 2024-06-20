import { Tweet as TTweet } from "../api/tweet/Tweet";

export const TWEET_TITLE_FIELD = "author";

export const TweetTitle = (record: TTweet): string => {
  return record.author?.toString() || String(record.id);
};
