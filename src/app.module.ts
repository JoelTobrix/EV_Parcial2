import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClientesModule } from './clientes/clientes.module';
import { CuentasModule } from './cuentas/cuentas.module';
import { TransaccionesModule } from './transacciones/transacciones.module';
import { SucursalesModule } from './sucursales/sucursales.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['env.development'],
      isGlobal: true,
    }),
    ClientesModule,
    CuentasModule,
    TransaccionesModule,
    SucursalesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
