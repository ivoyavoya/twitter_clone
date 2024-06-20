import * as graphql from "@nestjs/graphql";
import { TweetResolverBase } from "./base/tweet.resolver.base";
import { Tweet } from "./base/Tweet";
import { TweetService } from "./tweet.service";

@graphql.Resolver(() => Tweet)
export class TweetResolver extends TweetResolverBase {
  constructor(protected readonly service: TweetService) {
    super(service);
  }
}
