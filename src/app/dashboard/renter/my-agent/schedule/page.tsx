"use client";
import React, { useEffect, useRef, useState } from "react";
//@ts-ignore
import "@appointlet/appointlet.js/dist/appointlet.min.css";
import { useSearchParams } from "next/navigation";

const NewMeetingPage = () => {
  const [appointlet, setAppointlet] = useState(null);
  const embedContainerRef = useRef<HTMLElement>(null);
  const searchParams = useSearchParams();
  const matchId = searchParams?.get("m")?.slice(3);
  const actionType = searchParams?.get("t");
  const firstName = searchParams?.get("fn");
  const lastName = searchParams?.get("ln");
  const email = searchParams?.get("e");
  const phone = searchParams?.get("p");

  useEffect(() => {
    const containerRef = embedContainerRef.current;
    // Create an instance of the Appointlet object, passing in your scheduling page URL
    const getInstance = async () => {
      //@ts-ignore
      const Appointlet = (await import("@appointlet/appointlet.js")).default;
      const appointletInstance = new Appointlet(
        `https://appt.link/meet-with-rentrightGH/be-my-agent-renter?field__match=${matchId}&field__type=${actionType}&first_name=${firstName}&last_name=${lastName}&email=${email}&location=${phone}`,
      );
      setAppointlet(appointletInstance);
    };
    getInstance();

    // Clean up on unmount
    return () => {
      if (containerRef) {
        //@ts-ignore
        containerRef.innerHTML = ""; // Clear the container
      }
    };
  }, [actionType, matchId, firstName, lastName, email, phone]);

  useEffect(() => {
    if (appointlet && embedContainerRef.current) {
      const embedSchedulingPage = async () => {
        //@ts-ignore
        await appointlet.inlineEmbed(embedContainerRef.current);
      };
      embedSchedulingPage();
    }
  }, [appointlet]);

  return <main ref={embedContainerRef} />;
};

export default NewMeetingPage;
