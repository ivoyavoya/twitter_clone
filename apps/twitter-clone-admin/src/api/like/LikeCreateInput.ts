import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  tweet?: TweetWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
