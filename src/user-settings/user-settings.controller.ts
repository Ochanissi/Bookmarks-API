import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserSettingsDto } from './dto';
import { UserSettingsService } from './user-settings.service';

@UseGuards(JwtGuard)
@Controller('user-settings')
export class UserSettingsController {
  constructor(private userSettingsService: UserSettingsService) {}
  @Get()
  getMe(@GetUser('id') userId: number) {
    return this.userSettingsService.getUserSettings(userId);
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserSettingsDto) {
    return this.userSettingsService.editUserSettings(userId, dto);
  }
}
