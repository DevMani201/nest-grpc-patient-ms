import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Address, Gender } from 'src/dto/patient.pb';

@Schema()
export class Patientp {
  @Prop()
  patientId: string;
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  dob: string;
  @Prop()
  name: string;
  @Prop()
  age: string;
  @Prop({ type: Object, enum: Gender })
  gender: Gender;

  @Prop({ type: Object })
  address: Address;
}
export const PatientpSchema = SchemaFactory.createForClass(Patientp);
