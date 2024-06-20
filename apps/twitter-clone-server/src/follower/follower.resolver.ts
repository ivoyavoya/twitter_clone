import * as graphql from "@nestjs/graphql";
import { FollowerResolverBase } from "./base/follower.resolver.base";
import { Follower } from "./base/Follower";
import { FollowerService } from "./follower.service";

@graphql.Resolver(() => Follower)
export class FollowerResolver extends FollowerResolverBase {
  constructor(protected readonly service: FollowerService) {
    super(service);
  }
}
