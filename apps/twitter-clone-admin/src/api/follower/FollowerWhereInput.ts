import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { FollowerListRelationFilter } from "./FollowerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowerWhereInput = {
  follower?: FollowerWhereUniqueInput;
  followers?: FollowerListRelationFilter;
  following?: StringNullableFilter;
  id?: StringFilter;
};
