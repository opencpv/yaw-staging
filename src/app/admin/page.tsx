"use client";

import Loader from "@/components/__shared/loader/Loader";
import supabase from "@/lib/utils/supabaseClient";
import { useState } from "react";

const Admin = () => {
  const [email, setemail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [hasAccess, setHasAccess] = useState<boolean>(false);

  return (
    <>
      <div
        className={`h-[100dvh] items-center justify-center ${
          hasAccess ? "hidden" : "flex"
        }`}
        onClick={() => setHasAccess(true)}
      >
        <div className="divide-x-1 flex items-center gap-5">
          <h1 className="text-3xl font-[600]">404</h1>
          <p className="pl-5">Page not found</p>
        </div>
      </div>
      <main
        className={`w-full h-[100dvh] items-center justify-center ${
          hasAccess ? "flex" : "hidden"
        }`}
      >
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
