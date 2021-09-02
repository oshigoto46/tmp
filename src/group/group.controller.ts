import {
  Controller,
  Get,
  Param,
  UseGuards,
  NotFoundException,
} from "@nestjs/common";
import { RolesGuard } from "../common/guards/roles.guard";
import { ParseIntPipe } from "../common/pipes/parse-int.pipe";
import { GroupService } from "./group.service";
import { Group } from "./interfaces/group.interface";
import { ApiResponse } from "@nestjs/swagger";
import { Web3AccessAbstract } from "../web3/web.3access.abstract";

@UseGuards(RolesGuard)
@Controller("group")
export class GroupController {
  constructor(
    private readonly groupService: GroupService,
    private readonly web3: Web3AccessAbstract
  ) {}

  @Get(":groupId")
  @ApiResponse({ status: 200, description: " GroupId has Successfully found." })
  @ApiResponse({ status: 404, description: " GroupId has not been found." })
  async findOne(
    @Param("groupId", new ParseIntPipe())
    groupId: Number
  ): Promise<Group> {
    const group: Group = await this.groupService.findOne(groupId);
    if (group.name === "not_found") {
      throw new NotFoundException(`groupId: ${groupId} not found`);
    }
    return group;
  }
}
