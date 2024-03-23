import { Module } from '@nestjs/common';
import { TransaccionesController } from './transacciones.controller';
import { ProxyApiBancoModule } from 'src/common/proxy/proxi.module';

@Module({
  imports: [ProxyApiBancoModule],
  controllers: [TransaccionesController],
})
export class TransaccionesModule {}