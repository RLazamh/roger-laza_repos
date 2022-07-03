import {
    IsNotEmpty,
    IsInt,
    IsNumber,
  } from 'class-validator';
  
  export class CreateMetricDto {
    @IsInt()
    id: number;
  
    @IsNotEmpty()
    @IsNumber()
    coverage: number;
  
    @IsNotEmpty()
    @IsInt()
    bugs: number;

    @IsNotEmpty()
    @IsInt()
    vulnerabilities: number;

    @IsNotEmpty()
    @IsInt()
    hostpost: number;

    @IsNotEmpty()
    @IsInt()
    code_smell: number;

    @IsNotEmpty()
    @IsInt()
    repository: number;

  }