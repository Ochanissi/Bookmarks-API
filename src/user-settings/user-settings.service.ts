import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserSettingsDto } from './dto';

@Injectable()
export class UserSettingsService {
  constructor(private prisma: PrismaService) {}

  getUserSettings(userId: number) {
    return this.prisma.userSettings.findUnique({
      where: {
        userId,
      },
    });
  }

  async editUserSettings(userId: number, dto: EditUserSettingsDto) {
    const userSettings = await this.prisma.userSettings.update({
      where: {
        userId,
      },
      data: {
        ...dto,
      },
    });

    return userSettings;
  }
}
