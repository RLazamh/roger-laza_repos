import {
    IsNotEmpty,
    IsString,
    IsInt,
    IsDate,
  } from 'class-validator';
  
  export class CreateOrganizationDto {
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
  }