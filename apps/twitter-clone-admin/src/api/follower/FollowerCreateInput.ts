import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { FollowerCreateNestedManyWithoutFollowersInput } from "./FollowerCreateNestedManyWithoutFollowersInput";

export type FollowerCreateInput = {
  follower?: FollowerWhereUniqueInput | null;
  followers?: FollowerCreateNestedManyWithoutFollowersInput;
  following?: string | null;
};
