import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ProxyApiBancoModule } from 'src/common/proxy/proxi.module';

@Module({
  imports: [ProxyApiBancoModule],
  controllers: [ClientesController],
})
export class ClientesModule {}