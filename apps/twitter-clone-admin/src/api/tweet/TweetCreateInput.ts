import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  author?: string | null;
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
};
