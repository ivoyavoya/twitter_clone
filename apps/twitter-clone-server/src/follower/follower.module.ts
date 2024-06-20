import { Module } from "@nestjs/common";
import { FollowerModuleBase } from "./base/follower.module.base";
import { FollowerService } from "./follower.service";
import { FollowerController } from "./follower.controller";
import { FollowerResolver } from "./follower.resolver";

@Module({
  imports: [FollowerModuleBase],
  controllers: [FollowerController],
  providers: [FollowerService, FollowerResolver],
  exports: [FollowerService],
})
export class FollowerModule {}
