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
  import { ClienteDTO } from './dto/clientes.dto';
  import { Observable } from 'rxjs';
  import { IClientes } from './clientes.interface';
  import { ClientesMSG } from 'src/common/constants';
  
  @Controller('clientes')
  export class ClientesController {
    constructor(private readonly clienteProxy: ClienteProxyApiBanco) {}
  
    private _clienteProxyCliente = this.clienteProxy.clientePorxiesClientes();
  
    @Post()
    insrtar(@Body() userDTO: ClienteDTO): Observable< IClientes> {
      return this._clienteProxyCliente.send(ClientesMSG.INSERTAR, userDTO);
    }
  
    @Get()
    todos(): Observable<IClientes[]> {
      return this._clienteProxyCliente.send(ClientesMSG.TODOS, '');
    }
    @Get(':id')
    uno(@Param() id: string): Observable<IClientes> {
      return this._clienteProxyCliente.send(ClientesMSG.UNO, id);
    }
    @Put(':id')
    actualizar(
      @Param('id') id: string,
      @Body() userDTO: ClienteDTO,
    ): Observable<any> {
      return this._clienteProxyCliente.send(ClientesMSG.ACTUALIZAR, {
        id,
        userDTO,
      });
    }
    @Delete(':id')
    eliminar(@Param('id') id: string): Observable<any> {
      return this._clienteProxyCliente.send(ClientesMSG.ELIMINAR, id);
    }
  }