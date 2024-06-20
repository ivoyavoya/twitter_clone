import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  tweet?: TweetWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
