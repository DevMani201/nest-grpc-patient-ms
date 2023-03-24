import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { PATIENT_PACKAGE_NAME } from './dto/patient.pb';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50052',
      package: PATIENT_PACKAGE_NAME,
      protoPath: 'node_modules/grpc-proto/proto/patient.proto',
    },
  });
  await app.listen();
}
bootstrap();
