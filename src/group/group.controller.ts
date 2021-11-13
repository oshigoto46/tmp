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

@UseGuards(RolesGuard)
@Controller("group")
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get(":groupId")
  @ApiResponse({ status: 200, description: " GroupId has Successfully found." })
  @ApiResponse({ status: 404, description: " GroupId has not been found." })
  async findOne(
    @Param("groupId", new ParseIntPipe())
    groupId: number
  ): Promise<Group> {
    const group: Group = await this.groupService.findOne(groupId);
    if (group.name === "not_found") {
      throw new NotFoundException(`groupId: ${groupId} not found`);
    }
    return group;
  }
}
