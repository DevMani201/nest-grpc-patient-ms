import { InjectModel } from '@nestjs/mongoose';
import { Controller, Get, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Patientp } from './schema/patient.schema';
import { Model } from 'mongoose';
import {
  GetRequest,
  Info,
  PatientInfo,
  PatientVerification,
  PatientVerify,
  UpdateAddress,
} from './dto/patient.pb';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectModel('patient')
    private patientModel: Model<Patientp>,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @GrpcMethod('PatientService', 'SavePatientInfo')
  async savePatientInfo(data: PatientInfo): Promise<PatientInfo> {
    return data;
  }
  @GrpcMethod('PatientService', 'VerifyDetail')
  async verifyDetial(
    data: PatientVerify,
    metadata: any,
  ): Promise<PatientVerify> {
    console.log(data, metadata);
    return data;
  }
  @GrpcMethod('PatientService', 'SavePatient')
  async savePatient(data: Info): Promise<Info> {
    const mod = new this.patientModel(data);
    return mod.save();
  }
  @GrpcMethod('PatientService', 'GetPatient')
  async getPatient(data: GetRequest): Promise<Info> {
    const res = this.patientModel.findOne({
      patientId: data.patientId,
    });
    if (!res) {
      console.log('Not Found 404 Error');
      throw new NotFoundException();
    }
    return res;
  }

  @GrpcMethod('PatientService', 'VerifyPatient')
  async verifyPatient(data: PatientVerification) {
    const res = this.patientModel.findOne({
      patientId: data.patientId,
      firstName: data.info.firstName,
      lastName: data.info.lastName,
      dob: data.info.dob,
    });
    if (!res) {
      throw new NotFoundException();
    }
    return res;
  }

  @GrpcMethod('PatientService', 'UpdateAdress')
  async updateAdresst(data: UpdateAddress): Promise<Info> {
    const res = this.patientModel.findOneAndUpdate(
      {
        patientId: data.patientId,
      },
      {
        address: data.address,
      },
      {
        new: true,
      },
    );
    if (!res) {
      console.log('Not Found 404 Error');
      throw new NotFoundException();
    }
    return res;
  }
}
