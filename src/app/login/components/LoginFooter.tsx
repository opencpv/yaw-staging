import Link from "next/link";

export const LoginFooter = () => {
  return (
    <div className="mb-10 flex flex-col items-center justify-center gap-4 text-base font-semibold">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-[#B0B0B0]">
          By signing in, you agree to the following:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/terms-of-service" className="text-white underline">
            Terms and Conditions
          </Link>
          <div className="hidden h-full w-0.5 bg-white [@media_(min-width:310px)]:block"></div>
          <Link href="/privacy" className="text-white underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};
