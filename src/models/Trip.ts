import { FieldTypes } from 'models/Field';

export class TripField {
  id!: string;
  title!: string;
  endDate!: Date;
  startDate!: Date;
  status!: FieldTypes;
  destinations!: string[];
}
