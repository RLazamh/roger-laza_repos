import {
    IsNotEmpty,
    IsString,
    IsInt,
    IsDate,
  } from 'class-validator';
import { Tribe } from '../entities';
  
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

    @IsInt()
    tribe : Tribe;

  }