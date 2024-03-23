import { Module } from '@nestjs/common';
import { ClienteProxyApiBanco } from './client.proxy';

@Module({
  providers: [ClienteProxyApiBanco],
  exports: [ClienteProxyApiBanco],
})
export class ProxyApiBancoModule {}
