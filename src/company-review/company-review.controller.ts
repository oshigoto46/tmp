import { Controller, Get, HttpCode, Req } from '@nestjs/common';

@Controller('company-review')
export class CompanyReviewController {
  @Get('not-implemented')
  @HttpCode(501)
  handleNotImplemented(): string {
    return 'Not implemented';
  }
}
