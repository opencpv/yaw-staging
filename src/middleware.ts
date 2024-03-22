import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = "/login";

  // create a supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (session) return res;
  if (error) return NextResponse.redirect(new URL("/login", req.url));
  return NextResponse.redirect(redirectUrl);
};

export const config = {
  matcher: [
    /**
     * Match all request paths "/dashboard/[currentRole]/" excepts for ones starting with:
     * - settings
     */
    "/dashboard/renter/((?!settings).*)",
    "/dashboard/lister/((?!settings).*)",
    "/dashboard/service-pro/((?!settings).*)",
  ],
};
