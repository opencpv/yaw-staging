// @ts-nocheck

"use client";
import supabase from "@/lib/utils/supabaseClient";
import { useAppStore } from "@/store/dashboard/AppStore";
import axios from "axios";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";

const Test = () => {
  const [file, setFile] = useState<File | null>();

  return (
    <>
      <Head>
        <title>Dashboard - RentRightGh</title>
      </Head>
      <main className="h-[100vh] w-full bg-slate-800">
        <input
          type="file"
          onChange={(e) => {
            // Check if e.target and e.target.files are not null
            if (e.target && e.target.files) {
              setFile(e.target.files[0] as File);
            }
          }}
          className="text-white"
        />
        <button
          className="mt-4 rounded-full bg-white p-2 "
          onClick={async () => {
            console.log(file);

            // Check if file is not null before proceeding
            if (file) {
              const formData = new FormData();
              formData.append("file", file);

              try {
                // Make a POST request using Axios
                const response = await axios.post(
                  "http://localhost:3000/api/file-upload",
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                      // Add any additional headers if needed
                    },
                  },
                );

                // Handle the response as needed
                console.log("Response:", response.data);
              } catch (error) {
                // Handle errors
                console.error("Error:", error);
              }
            } else {
              console.error("No file selected");
            }
          }}
        >
          Submit
        </button>
      </main>
    </>
  );
};
export default Test;
