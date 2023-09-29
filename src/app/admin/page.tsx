"use client";

import Loader from "@/components/__shared/loader/Loader";
import supabase from "@/lib/utils/supabaseClient";
import { useState } from "react";

const Admin = () => {
  const [email, setemail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <main className="w-full h-[100vh] flex items-center justify-center ">
        <div className="w-[300px]">
          <input
            type="text"
            placeholder="username"
            className="border-2 px-2 py-2 w-full border-darkGreenBg/25 rounded-md my-2"
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e: any) => setPassword(e.target.value)}
            className="border-2 px-2  py-2  w-full border-darkGreenBg/25 rounded-md my-2"
          />
          {loading ? (
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : (
            <button
              className="block w-full rounded-md border-2 py-2 border-[#000]"
              onClick={() => {
                setLoading(true);
                supabase.auth
                  .signInWithPassword({
                    email,
                    password,
                  })
                  .then(({ error }) => {
                    if (error) {
                      setLoading(false);
                    }
                  });
              }}
            >
              Login
            </button>
          )}
        </div>
      </main>
    </>
  );
};

export default Admin;
