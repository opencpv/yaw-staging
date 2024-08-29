import React from "react";
import { fetchRequestMatchById } from "../../services";
import { generatePropertyTitle } from "@/lib/enum";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { getFeatureIcon } from "@/lib/utils/getFeatureIcon";
import RenterInformation from "./RenterInformation";
import { LinkButton } from "@/components/__shared/ui/button";
import { cookies } from "next/headers";
import CancelRequestBtn from "./CancelRequestBtn";
import PropertyImageSlider from "./PropertyImageSlider";
import images from "@/enum/temp/images";

type Props = {
  matchId: number;
  actionType: string;
};

const MatchDetail = async (props: Props) => {
  const cookieStore = cookies();
  const scheduleInfo = cookieStore.get("bma-schedule-info")?.value;
  const previousPath = scheduleInfo?.split(",")[2];
  const renterId = scheduleInfo?.split(",")[4];
  const match = await fetchRequestMatchById({
    id: props.matchId,
    renterId: renterId as string,
  });

  const initialValues = {
    title: match?.agent_request?.title,
    firstName: match?.agent_request?.first_name,
    lastName: match?.agent_request?.last_name,
    country: match?.agent_request?.country,
  };

  return (
    <>
      <section className="p-10 max-sm:px-5">
        <div className="mx-auto max-w-screen-hd">
          <div className="fade-in-left space-y-5">
            <h3>Property Information</h3>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-5">
              <div className="col-span-3">
                <PropertyImageSlider
                  images={images}
                  title={generatePropertyTitle(match?.property as Property)}
                />
              </div>
              <div className="col-span-2 flex flex-col gap-16">
                <div className="space-y-2">
                  <h2 className="text-shade-300">
                    {generatePropertyTitle(match?.property as Property)}
                  </h2>
                  <h2 className="sm:text-3xl">
                    {formatPrice(match?.property?.monthly_amount || 0)} / month
                  </h2>
                </div>
                <div className="space-y-3 text-shade-300">
                  <h4>Features</h4>
                  {match?.property?.features?.length === 0 ? (
                    <p className="italic text-shade-200">Not specified</p>
                  ) : (
                    <ul className="flex flex-col gap-3">
                      {match?.property?.features?.map((feature) => (
                        <li className="flex items-center gap-5" key={feature}>
                          <span
                            className="text-primary"
                            style={{ color: "#11605E" }}
                          >
                            {getFeatureIcon(
                              feature.toLowerCase(),
                              22,
                              "#11605E",
                            )}
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5 pt-10">
            <h3>Renter Information</h3>
            <RenterInformation initialValues={initialValues} />
          </div>
        </div>
      </section>
      <footer className="mx-auto mt-10 max-w-screen-hd border-t border-shade-500 p-10 pt-4 max-sm:px-5">
        <div className="mx-auto flex flex-col gap-5 sm:flex-row sm:justify-end">
          <CancelRequestBtn
            previousPath={previousPath || "/dashboard/renter/my-agent/agent"}
          />
          {match?.meeting_id === null && (
            <LinkButton
              href={`/dashboard/renter/my-agent/schedule?${new URLSearchParams({
                m: `814${match?.id}`,
                t: props.actionType,
                fn: String(match?.agent_request?.first_name),
                ln: String(match?.agent_request?.last_name),
                e: String(match?.agent_request?.email),
                p: String(match?.agent_request?.phone),
              })}`}
            >
              Confirm Rental Request
            </LinkButton>
          )}
        </div>
      </footer>
    </>
  );
};

export default MatchDetail;
