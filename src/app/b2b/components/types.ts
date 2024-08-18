export type PaymentData = {
  id: string | number;
  service: string;
  amount: number;
  tax_rate: number;
  is_paid?: boolean;
  billing_date: string;
  service_description?: string;
  created_at?: string;
  customer?: string;
};
