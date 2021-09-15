import { Injectable } from '@nestjs/common';
import { envFilePath } from './app.module';

@Injectable()
export class AppService {
  getData(): { message: string; env?: string } {
    return { message: envFilePath, env: `${Object.keys(process.env)}` };
  }

  public getAss(ip: number | string) {
    return { message: ip };
  }
}
