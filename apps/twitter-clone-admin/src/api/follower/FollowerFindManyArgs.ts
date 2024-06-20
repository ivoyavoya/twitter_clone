import { FollowerWhereInput } from "./FollowerWhereInput";
import { FollowerOrderByInput } from "./FollowerOrderByInput";

export type FollowerFindManyArgs = {
  where?: FollowerWhereInput;
  orderBy?: Array<FollowerOrderByInput>;
  skip?: number;
  take?: number;
};
