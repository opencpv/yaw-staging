import { caseInsensitiveCompare, convertYesNoToBoolean } from "@/lib/utils/stringManipulation"
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore"

export const getFormValues = (values: typeof ListingDefaultValues) => {
  const monthlyAmount =
    
      Number(values?.total_amount) / (Number(values?.lease_duration.slice(0, 1)) * 12) || null;

for (let key in values) {
  if (key.startsWith("amount") || key.startsWith("fee_title")) {
    //@ts-ignore
    delete values[key];
  }
}

  return {
      ...values,
      template_type: values.template_type as "STANDARD" | "PROFESSIONAL",
      require_refundable_security_deposit: convertYesNoToBoolean(
        values.require_refundable_security_deposit,
      ),
      require_additional_fees: convertYesNoToBoolean(
        values.require_additional_fees,
      ),
      require_viewing_fee: convertYesNoToBoolean(
        values.require_viewing_fee,
      ),
      require_agent_fee: convertYesNoToBoolean(values.require_agent_fee),
      total_amount: Number(values.total_amount),
      monthly_amount: Number(monthlyAmount?.toFixed(2)),
      refundable_security_deposit: Number(
        values.refundable_security_deposit,
      ),
      agent_fee: Number(values.agent_fee),
      viewing_fee: Number(values.viewing_fee),
      lease_duration: caseInsensitiveCompare(values.payment_terms, "monthly") ? null : values.lease_duration,
  }
}
