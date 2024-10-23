export class CreatePaymentDto {
  client_id: string;
  order_id: string;
  amount: number; // we have total price in order. but instead, i can add some kindof fee.
  payment_method: string;
  payment_status: string;
}
