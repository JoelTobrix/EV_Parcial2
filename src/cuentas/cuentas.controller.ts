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
  import { CuentasDTO } from './dto/cuentas.dto';
  import { Observable } from 'rxjs';
  import { ICuentas } from './cuentas.interface';
  import { CuentasMSG } from 'src/common/constants';
  
  @Controller('cuentas')
  export class CuentasController {
    constructor(private readonly clienteProxy: ClienteProxyApiBanco) {}
  
    private _clienteProxyCuentas = this.clienteProxy.clienteProxysCuentas();
  
    @Post()
    insrtar(@Body() userDTO: CuentasDTO): Observable< ICuentas> {
      return this._clienteProxyCuentas.send(CuentasMSG.INSERTAR, userDTO);
    }
  
    @Get()
    todos(): Observable<ICuentas[]> {
      return this._clienteProxyCuentas.send(CuentasMSG.TODOS, '');
    }
    @Get(':id')
    uno(@Param() id: string): Observable<ICuentas> {
      return this._clienteProxyCuentas.send(CuentasMSG.UNO, id);
    }
    @Put(':id')
    actualizar(
      @Param('id') id: string,
      @Body() userDTO: CuentasDTO,
    ): Observable<any> {
      return this._clienteProxyCuentas.send(CuentasMSG.ACTUALIZAR, {
        id,
        userDTO,
      });
    }
    @Delete(':id')
    eliminar(@Param('id') id: string): Observable<any> {
      return this._clienteProxyCuentas.send(CuentasMSG.ELIMINAR, id);
    }
  }