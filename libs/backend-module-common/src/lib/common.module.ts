import { Global, Module } from '@nestjs/common';
import { PasswordUtility } from './services/password.utility';

@Global()
@Module({
  controllers: [],
  providers: [PasswordUtility],
  exports: [PasswordUtility],
})
export class CommonModule {}
