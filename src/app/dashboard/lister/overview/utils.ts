import { convertYesNoToBoolean } from "@/lib/utils/stringManipulation";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";

export const getFormValues = (values: typeof ListingDefaultValues) => {
  const monthlyAmount =
    Number(values?.total_amount) /
      (Number(values?.payment_terms.slice(0, 1)) * 12) ||
    Number(values.total_amount);

  const agentFee = convertYesNoToBoolean(values?.require_agent_fee)
    ? Number(values?.agent_fee)
    : null;
  const viewingFee = convertYesNoToBoolean(values?.require_viewing_fee)
    ? Number(values?.viewing_fee)
    : null;
  const refundableSecurityDeposit = convertYesNoToBoolean(
    values?.require_refundable_security_deposit,
  )
    ? Number(values?.refundable_security_deposit)
    : null;

  const additionalFees = convertYesNoToBoolean(values?.require_additional_fees)
    ? values?.additional_fees
    : null;

  // Remove amount and fee_title keys
  // to avoid sending them to the Database
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
    require_viewing_fee: convertYesNoToBoolean(values.require_viewing_fee),
    require_agent_fee: convertYesNoToBoolean(values.require_agent_fee),
    total_amount: Number(values.total_amount),
    monthly_amount: Number(monthlyAmount?.toFixed(2)),
    refundable_security_deposit: refundableSecurityDeposit,
    agent_fee: agentFee,
    viewing_fee: viewingFee,
    additional_fees: additionalFees,
    lease_options:
      values.lease_options.length === 0 ? null : values.lease_options,
    incentives: values.incentives.length === 0 ? null : values.incentives,
  };
};
