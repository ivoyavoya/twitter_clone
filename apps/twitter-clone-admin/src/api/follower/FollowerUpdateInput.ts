import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { FollowerUpdateManyWithoutFollowersInput } from "./FollowerUpdateManyWithoutFollowersInput";

export type FollowerUpdateInput = {
  follower?: FollowerWhereUniqueInput | null;
  followers?: FollowerUpdateManyWithoutFollowersInput;
  following?: string | null;
};
