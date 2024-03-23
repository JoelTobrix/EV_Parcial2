import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { ClienteProxyApiBanco } from 'src/common/proxy/client.proxy';
import { TransaccionesDTO } from './dto/transacciones.dto'; 
import { Observable } from 'rxjs';
import { ITransacciones } from './transacciones.interface'; 
import { TransaccionesMSG } from 'src/common/constants'; 

@Controller('transacciones') 
export class TransaccionesController { 
  constructor(private readonly clienteProxy: ClienteProxyApiBanco) {}

  private _clienteProxyTransacciones = this.clienteProxy.clienteProxyTransacciones(); 

  @Post()
  insertar(@Body() transaccionesDTO: TransaccionesDTO): Observable<ITransacciones> { 
    return this._clienteProxyTransacciones.send(TransaccionesMSG.INSERTAR, transaccionesDTO);
  }

  @Get()
  todos(): Observable<ITransacciones[]> {
    return this._clienteProxyTransacciones.send(TransaccionesMSG.TODOS, '');
  }

  @Get(':id')
  uno(@Param('id') id: string): Observable<ITransacciones> { 
    return this._clienteProxyTransacciones.send(TransaccionesMSG.UNO, id);
  }

  @Put(':id')
  actualizar(
    @Param('id') id: string,
    @Body() transaccionesDTO: TransaccionesDTO, 
  ): Observable<any> {
    return this._clienteProxyTransacciones.send(TransaccionesMSG.ACTUALIZAR, {
      id,
      transaccionesDTO, 
    });
  }

  @Delete(':id')
  eliminar(@Param('id') id: string): Observable<any> {
    return this._clienteProxyTransacciones.send(TransaccionesMSG.ELIMINAR, id);
  }
}
