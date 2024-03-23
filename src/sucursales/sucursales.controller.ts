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
  import { SucursalesDTO } from './dto/sucursales.dto';
  import { Observable } from 'rxjs';
  import { ISucursales } from './sucursales.interface';
  import { SucursalesMSG } from 'src/common/constants';
  
  @Controller('sucursales')
  export class SucursalesController {
    constructor(private readonly clienteProxy: ClienteProxyApiBanco) {}
  
    private _clienteProxySucursales = this.clienteProxy.clienteProxySucursales();
  
    @Post()
    insrtar(@Body() userDTO: SucursalesDTO): Observable< ISucursales> {
      return this._clienteProxySucursales.send(SucursalesMSG.INSERTAR, userDTO);
    }
  
    @Get()
    todos(): Observable<ISucursales[]> {
      return this._clienteProxySucursales.send(SucursalesMSG.TODOS, '');
    }
    @Get(':id')
    uno(@Param() id: string): Observable<ISucursales> {
      return this._clienteProxySucursales.send(SucursalesMSG.UNO, id);
    }
    @Put(':id')
    actualizar(
      @Param('id') id: string,
      @Body() userDTO: SucursalesDTO,
    ): Observable<any> {
      return this._clienteProxySucursales.send(SucursalesMSG.ACTUALIZAR, {
        id,
        userDTO,
      });
    }
    @Delete(':id')
    eliminar(@Param('id') id: string): Observable<any> {
      return this._clienteProxySucursales.send(SucursalesMSG.ELIMINAR, id);
    }
  }