import { Module } from '@nestjs/common';
import { SucursalesController } from './sucursales.controller';
import { ProxyApiBancoModule } from 'src/common/proxy/proxi.module';

@Module({
  imports: [ProxyApiBancoModule],
  controllers: [SucursalesController],
})
export class SucursalesModule {}