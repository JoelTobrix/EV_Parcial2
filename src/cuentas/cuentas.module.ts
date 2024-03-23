import { Module } from '@nestjs/common';
import { CuentasController } from './cuentas.controller';
import { ProxyApiBancoModule } from 'src/common/proxy/proxi.module';

@Module({
  imports: [ProxyApiBancoModule],
  controllers: [CuentasController],
})
export class CuentasModule {}