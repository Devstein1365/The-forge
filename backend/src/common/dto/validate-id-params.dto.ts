import { IsUUID } from 'class-validator';

export class ValidateParamsID {
  @IsUUID('4', { message: 'Invalid ID.' })
  id: string;
}
