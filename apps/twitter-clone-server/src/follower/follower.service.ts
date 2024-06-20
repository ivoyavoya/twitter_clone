import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FollowerServiceBase } from "./base/follower.service.base";

@Injectable()
export class FollowerService extends FollowerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
