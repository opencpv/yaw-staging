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
      <main className="w-full h-[100vh] bg-slate-800">
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target?.files[0]);
            console.log(e.target?.files[0]);
          }}
          className="text-white"
        />
        <button
          className="bg-white p-2 rounded-full mt-4 "
          onClick={async () => {
            console.log(file);
            const formData = new FormData();
            formData.append("file", file as File);
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
                }
              );

              // Handle the response as needed
              console.log("Response:", response.data);
            } catch (error) {
              // Handle errors
              console.error("Error:", error);
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
