import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FollowerService } from "./follower.service";
import { FollowerControllerBase } from "./base/follower.controller.base";

@swagger.ApiTags("followers")
@common.Controller("followers")
export class FollowerController extends FollowerControllerBase {
  constructor(protected readonly service: FollowerService) {
    super(service);
  }
}
