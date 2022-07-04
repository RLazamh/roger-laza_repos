import {
    IsNotEmpty,
    IsString,
    IsInt,
    IsDate,
  } from 'class-validator';
  
  export class CreateRepositoryDto {
    @IsInt()
    id: number;
  
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsString()
    state: string;
  
    @IsDate()
    created_at: Date;

    @IsNotEmpty()
    @IsInt()
    tribe : number;

  }