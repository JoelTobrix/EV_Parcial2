import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class TransaccionesDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'La cuenta de usuario es obligatorio' })
  @IsString()
  readonly  ID_Cuenta: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'La fecha es obligatoria' })
  @IsString()
  readonly  Fecha: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'El monto es obligatorio' })
  @IsString()
  readonly Monto: number;


  
  

}