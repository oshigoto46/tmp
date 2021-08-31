import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { RolesGuard } from "../common/guards/roles.guard";
import { LastBlockService } from "./lastblock.service";
import { Block } from "./interfaces/block.interface";
import { ApiResponse } from "@nestjs/swagger";

@UseGuards(RolesGuard)
@Controller("last-block")
export class LastBlockController {
  constructor(private readonly lastBlockService: LastBlockService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: "Last block has Successfully found.",
  })
  async findAll(): Promise<Block> {
    return this.lastBlockService.findAll();
  }
}
