export class CreateCustomerDto {
  full_name: string;
  phone_number: string;
  country: string;
  birthdate: Date;
  email: string;
  password: string;
  confirm_password: string;
}
