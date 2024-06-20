import { TweetWhereUniqueInput } from "./TweetWhereUniqueInput";
import { TweetUpdateInput } from "./TweetUpdateInput";

export type UpdateTweetArgs = {
  where: TweetWhereUniqueInput;
  data: TweetUpdateInput;
};
