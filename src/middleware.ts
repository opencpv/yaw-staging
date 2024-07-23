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

  return res;
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
// "/((?!_next/static|_next/image|favicon.ico).*)"

//   ],
// };
