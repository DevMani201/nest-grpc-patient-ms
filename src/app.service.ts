import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //constructor(@Inject('LOGIN_PACKAGE') private readonly client: ClientGrpc) {}

  // onModuleInit() {
  //   this.heroService = this.client.getService<UserService>('UserService');
  // }
  getHello(): string {
    return 'Hello World!';
  }
}
