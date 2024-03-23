import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SucursalesDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'Llenar este campo es obligatorio' })
  @IsString()
  readonly Direccion: String;
 
}