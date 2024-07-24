import React, { useEffect, useState } from "react";
import { NavigationButton } from "./BeMyAgentForm";
import { cn } from "@/lib/utils";
import { views as BeMyAgentViews } from "./BeMyAgentForm";
import { beMyAgentStepsStore } from "@/store/dashboard/beMyAgentStepsStore";
import Button from "@/components/__shared/ui/button/Button";
import { useFormikContext } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import { BeMyAgentFormType } from "./types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-toastify";
import { useCurrentUserId } from "@/lib/custom-hooks/useCurrentUserId";

type Props = {
  onClose: () => void;
};

const BeMyAgentFooter = ({ onClose }: Props) => {
  const { submitForm, values, resetForm } = useFormikContext<any>();
  const id = useCurrentUserId()
  const { activeSlide, setActiveSlide, lastSlide, firstSlide } =
    beMyAgentStepsStore();
  const [loading,setLoading] = useState(false)
  const [agentFormData, setAgentFormData] =
    useLocalStorage<BeMyAgentFormType>("agent-form");

  useEffect(() => {
    if (lastSlide) {
      setAgentFormData({
        ...(values as any), // set the values of the form to localStorage (which itself is a copy of initial values + local storage values)
        // ...agentFormData,
      });
    }
  }, [lastSlide, setAgentFormData, values, agentFormData]);

  const handleBack = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }

    if (firstSlide) {
      localStorage.removeItem("agent-form");
      resetForm({});
      onClose();
    }
  };

  const handleForward = () => {
    if (activeSlide === BeMyAgentViews.length - 2) {
      submitForm(); // tentative
    }
    if (activeSlide < BeMyAgentViews.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <section className="ml-auto grid grid-cols-2 items-center gap-2 max-sm:w-full xs:justify-end">
      <Button
        color={!firstSlide ? "accent" : undefined}
        variant={!firstSlide ? "outline" : "default"}
        className={cn(
          "col-span-1 h-[58px] rounded-lg font-semibold focus:outline-none xs:text-base sm:min-w-[16rem]",
          {
            "bg-primary-200/80 text-white hover:bg-primary-200": firstSlide,
            invisible: lastSlide,
          },
        )}
        onClick={handleBack}
      >
        {firstSlide ? "Cancel" : "Back"}
      </Button>
      <Button
      isLoading={loading}
        color="accent"
        className="col-span-1 h-[58px] rounded-lg font-semibold focus:outline-none xs:text-base sm:min-w-[16rem]"
        onClick={() => {
         if(lastSlide){
          setLoading(true)
          const supabase = createClientComponentClient()
          supabase.from("agent_request").insert({
            "renter_id":id,
            "property_type": values["propertyType"],
            "location": [
                {
                    "locationCity": values["locationCity"],
                    "locationNeighbourhood": values["locationNeighbourhood"]
                }
            ],
            "min_price": parseFloat(values["priceRangeMinimum"]),
            "max_price": parseFloat(values["priceRangeMaximum"]),
            "min_beds": parseInt(values["bedMinimum"]),
            "max_beds": parseInt(values["bedMaximum"]),
            "min_bathrooms": parseInt(values["bathroomMinimum"]),
            "max_bathrooms": parseInt(values["bathroomMaximum"]),
            "is_active": false,
            "email": values["email"],
            "preferred_contact_method": values["preferredMethodOfContact"],
            "search_title": values["searchName"],
            "features": values["featuresAndAmenities"],
            "min_lease": parseInt(values["leaseTermMinimum"]),
            "max_lease": parseInt(values["leaseTermMaximum"]),
            "preferred_payment_option": values["paymentOption"],
            "move_in_date": values["moveInDate"].split('T')[0],
            "title": values["title"],
            "age": values["dateOfBirth"],
            "tenants": values["tenants"],
            "first_name": values["firstName"],
            "last_name": values["lastName"],
            "marital_status": values["maritalStatus"],
            "current_address_1": values["currentAddress1"],
            "city": values["city"],
            "country": values["country"],
            "moving_reason": values["reasonForMoving"],
            "employment_status": values["mostRecentEmployment"],
            "employer": values["employer"],
            "employer_country": values["employersCountry"],
            "job_title": values["jobTitle"],
            "monthly_income": values["monthlyIncome"],
            "evicted": values["evictedBefore"] === "No" ? false : true,
            "convicted": values["convictedBefore"] === "No" ? false : true,
            "has_pets": values["pets"] === "Yes" ? true : false,
            "has_vehicles": values["vehicles"] === "Yes" ? true : false
        }).then(({data,error})=>{
          setLoading(false)
          if(error){
            toast.error(error.message)
          }
          else{
            console.log(data)
          }
        })
          console.log(values)
          return
         }
         handleForward();
        }}
        type="submit"
      >
        {lastSlide
          ? "Proceed to pay"
          : activeSlide === BeMyAgentViews.length - 2 // last but one
            ? "Summary"
            : "Continue"}
      </Button>
    </section>
  );
};

export default BeMyAgentFooter;
