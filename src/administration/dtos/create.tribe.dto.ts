import {
    IsNotEmpty,
    IsString,
    IsInt,
  } from 'class-validator';
  
  export class CreateTribeDto {
    @IsInt()
    id: number;
  
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsString()
    status: number;
  
    @IsNotEmpty()
    @IsInt()
    organizations : number;

  }