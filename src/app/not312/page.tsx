"use client";

import Loader from "@/components/__shared/ui/loader/Loader";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useState } from "react";

const Admin = () => {
  const [email, setemail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const { user, setUser } = useAppStore();
  const supabase = createClient();

  return (
    <>
      <div
        className={`h-[100dvh] items-center justify-center ${
          hasAccess ? "hidden" : "flex"
        }`}
      >
        <div className="flex items-center gap-5 divide-x-1">
          <h1 className="text-3xl font-[600]">404</h1>
          <p className="pl-5">
            This page could not be found
            <span onClick={() => setHasAccess(true)}>.</span>
          </p>
        </div>
      </div>
      <main
        className={`h-[100dvh] w-full items-center justify-center ${
          hasAccess ? "flex" : "hidden"
        }`}
      >
        <div className="w-[300px]">
          <input
            type="text"
            placeholder="username"
            className="my-2 w-full rounded-md border-2 border-darkGreenBg/25 px-2 py-2"
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e: any) => setPassword(e.target.value)}
            className="my-2 w-full  rounded-md  border-2 border-darkGreenBg/25 px-2 py-2"
          />
          {loading ? (
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : (
            <button
              className="block w-full rounded-md border-2 border-[#000] py-2"
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
