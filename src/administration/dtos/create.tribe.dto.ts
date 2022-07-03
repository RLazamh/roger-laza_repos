import {
    IsNotEmpty,
    IsString,
    IsInt,
    IsDate,
  } from 'class-validator';
import { Organization } from '../entities';
  
  export class CreateTribeDto {
    @IsInt()
    id: number;
  
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsString()
    status: number;
  
    @IsDate()
    created_at: Date;

    @IsInt()
    organization : Organization;

  }