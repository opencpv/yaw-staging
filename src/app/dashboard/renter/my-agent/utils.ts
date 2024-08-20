import capitalizeName, { convertYesNoToBoolean } from "@/lib/utils/stringManipulation";
import { BeMyAgentDefaultValues } from "@/store/dashboard/BeMyAgentStepsStore";

export const getFormValues = (values: typeof BeMyAgentDefaultValues) => {

  return {
    ...values,
    preferred_contact_method: capitalizeName(
      values.preferred_contact_method,
    ),
    evicted: convertYesNoToBoolean(values.evicted),
    convicted: convertYesNoToBoolean(values.convicted),
    has_pets: convertYesNoToBoolean(values.has_pets),
    has_vehicles: convertYesNoToBoolean(values.has_vehicles),
}
}
