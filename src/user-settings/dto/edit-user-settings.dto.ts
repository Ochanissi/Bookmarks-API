import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TimeFormat } from '@prisma/client';

export class EditUserSettingsDto {
  @IsString()
  @IsOptional()
  language?: string;

  @IsEnum(TimeFormat)
  @IsOptional()
  timeFormat?: TimeFormat;
}
