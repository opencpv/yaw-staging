export type PaymentData = {
  invoice_id: string | number;
  service: string;
  amount: number;
  status?: string;
  billing_date: string;
};
