import { PatientpSchema } from './schema/patient.schema';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Microservice-grpc-new'),
    MongooseModule.forFeature([
      {
        name: 'patient',
        collection: 'patient-collection',
        schema: PatientpSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
