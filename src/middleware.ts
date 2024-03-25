import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const origin = req.nextUrl.origin;
  const pathname = req.nextUrl.pathname;
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-origin", origin);
  requestHeaders.set("x-pathname", pathname);

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // create a supabase client configured to use cookies
  // const supabase = createMiddlewareClient<Database>({ req, res });
  // const {
  //   data: { session },
  //   error,
  // } = await supabase.auth.getSession();

  // if (error) return NextResponse.redirect(new URL("/login", req.url));

  // if (session) {
  //   if (
  //     req.nextUrl.pathname.includes("/dashboard/renter") ||
  //     req.nextUrl.pathname.includes("/dashboard/lister") ||
  //     req.nextUrl.pathname.includes("/dashboard/service-pro")
  //   ) {
  //     return res;
  //   }
  //   if (req.nextUrl.pathname === "/login") {
  //     return NextResponse.redirect(new URL("/dashboard", req.url));
  //   }
  // }

  // if (!session) {
  //   if (
  //     req.nextUrl.pathname.includes("/dashboard/renter") ||
  //     req.nextUrl.pathname.includes("/dashboard/lister") ||
  //     req.nextUrl.pathname.includes("/dashboard/service-pro")
  //   )
  //     return NextResponse.redirect(new URL("/", req.url));
  // }
  return res;
  // return NextResponse.redirect(new URL("/login", req.url));
};

// export const config = {
//   matcher: [
//     /**
//      * Match all request paths "/dashboard/[currentRole]/" excepts for ones starting with:
//      * - settings
//      */
//     // "/dashboard/renter/((?!settings).*)",
//     // "/dashboard/lister/((?!settings).*)",
//     // "/dashboard/service-pro/((?!settings).*)",
//     "/dashboard/renter/:path*",
//     "/dashboard/lister/:path*",
//     "/dashboard/service-pro/:path*",
//   ],
// };
