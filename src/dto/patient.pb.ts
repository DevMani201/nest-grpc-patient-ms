/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "patient";

export enum Gender {
  GENDER_MALE = 0,
  GENDER_FEMALE = 1,
  UNRECOGNIZED = -1,
}

export interface PatientVerify {
  firstName: string;
  lastName: string;
  dob: string;
}

export interface PatientVerification {
  patientId: string;
  info: PatientVerify | undefined;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: number;
}

export interface GetRequest {
  patientId: string;
}

export interface UpdateAddress {
  patientId: string;
  address: Address | undefined;
}

export interface PatientInfo {
  patientId: string;
  firstName: string;
  lastName: string;
  dob: number;
  gender: Gender;
  address: Address | undefined;
}

export interface Info {
  patientId: string;
  firstName: string;
  lastName: string;
  dob: string;
  name: string;
  age: string;
  gender: Gender;
  address: Address | undefined;
}

export const PATIENT_PACKAGE_NAME = "patient";

export interface PatientServiceClient {
  saveUserInfo(request: PatientInfo): Observable<PatientInfo>;

  verifyDetial(request: PatientVerify): Observable<PatientVerify>;

  savePatient(request: Info): Observable<Info>;

  getPatient(request: GetRequest): Observable<Info>;

  verifyPatient(request: PatientVerification): Observable<Info>;

  updateAdress(request: UpdateAddress): Observable<Info>;
}

export interface PatientServiceController {
  saveUserInfo(request: PatientInfo): Promise<PatientInfo> | Observable<PatientInfo> | PatientInfo;

  verifyDetial(request: PatientVerify): Promise<PatientVerify> | Observable<PatientVerify> | PatientVerify;

  savePatient(request: Info): Promise<Info> | Observable<Info> | Info;

  getPatient(request: GetRequest): Promise<Info> | Observable<Info> | Info;

  verifyPatient(request: PatientVerification): Promise<Info> | Observable<Info> | Info;

  updateAdress(request: UpdateAddress): Promise<Info> | Observable<Info> | Info;
}

export function PatientServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "saveUserInfo",
      "verifyDetial",
      "savePatient",
      "getPatient",
      "verifyPatient",
      "updateAdress",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("PatientService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("PatientService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PATIENT_SERVICE_NAME = "PatientService";
