import { ApiProperty } from '@nestjs/swagger';

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: number;
}

export class PatientVerifyDto {
  @ApiProperty()
  patientId: string;

  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  dob: string;
  gender: Gender;
  @ApiProperty()
  address: Address;
}

export class PatientDto {
  @ApiProperty({
    example: 'P-1',
  })
  patientId: string;

  @ApiProperty({
    example: 'TEST',
  })
  firstName: string;

  @ApiProperty({
    example: 'MK',
  })
  lastName: string;

  @ApiProperty({
    example: '15-07-1999',
  })
  dob: string;
  @ApiProperty({
    example: 'TEST MK',
  })
  name: string;
  @ApiProperty({
    example: 'MALE',
  })
  gender: Gender;
  @ApiProperty({
    example: {
      street: 'test',
      city: 'test',
      state: 'test',
      zipcode: 600096,
    },
  })
  address: Address;
}

export class VerifyDto {
  @ApiProperty({
    example: 'TEST',
  })
  firstName: string;

  @ApiProperty({
    example: 'MK',
  })
  lastName: string;

  @ApiProperty({
    example: '15-07-1999',
  })
  dob: string;
}

export class AddressDto {
  @ApiProperty({
    example: 'test',
  })
  street: string;
  @ApiProperty({
    example: 'test',
  })
  city: string;
  @ApiProperty({
    example: 'test',
  })
  state: string;
  @ApiProperty({
    example: 600096,
  })
  zipcode: string;
}
