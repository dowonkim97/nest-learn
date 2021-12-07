import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;

  // each: 각각 하나씩 유효성 검사
  @IsString({ each: true })
  readonly genres: string[];
}
