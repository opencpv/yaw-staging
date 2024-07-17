"use client";
import React, { useEffect, useRef, useState } from "react";
//@ts-ignore
import Appointlet from "@appointlet/appointlet.js";
import "@appointlet/appointlet.js/dist/appointlet.min.css";

const SchedulingPage = () => {
  const [appointlet, setAppointlet] = useState(null);
  const embedContainerRef = useRef<HTMLElement>(null);
  const [meetingData, setMeetingData] = useState(null);

  useEffect(() => {
    // Create an instance of the Appointlet object, passing in your scheduling page URL
    const appointletInstance = new Appointlet(
      "https://appt.link/meet-with-rentrightGH/be-my-agent-renter",
    );
    setAppointlet(appointletInstance);

    // Clean up on unmount
    return () => {
      if (embedContainerRef.current) {
        //@ts-ignore
        embedContainerRef.current.innerHTML = ""; // Clear the container
      }
    };
  }, []);

  useEffect(() => {
    if (appointlet && embedContainerRef.current) {
      const embedSchedulingPage = async () => {
        //@ts-ignore
        const meetingData = await appointlet.inlineEmbed(
          embedContainerRef.current,
        );
        setMeetingData(meetingData);
      };
      embedSchedulingPage();
    }
  }, [appointlet]);

  return <main ref={embedContainerRef} />;
};

export default SchedulingPage;
