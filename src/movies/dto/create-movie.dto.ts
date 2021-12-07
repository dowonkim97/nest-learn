import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;

  // IsOptional: 값이 empty(null & undefined) 일지라도 유효성 검사 무시
  @IsOptional()
  // @nestjs/swagger
  @ApiProperty()
  // each: 각각 하나씩 유효성 검사
  @IsString({ each: true })
  readonly genres: string[];
}
