import Button from "@/components/__shared/ui/button/Button";
import dynamic from "next/dynamic";
const GreenCheckLottie = dynamic(
  () => import("@/components/__shared/lotties/green-check-lottie"),
);

function Page() {
  return (
    <div
      className={`flex h-[100vh] flex-col items-center justify-center gap-5 p-4`}
    >
      <h1 className="text-center text-3xl text-shade-300">
        Your resume has been successfully submitted
      </h1>
      <GreenCheckLottie />{" "}
      <div className="flex flex-col items-center justify-center gap-1 text-center">
        <h2 className="text-3xl text-shade-300">Thank You !</h2>
        <p className="text-shade-200">We will get back to you soon.</p>
      </div>
      <Button href="/join-us/open-positions" color="accent" className="w-full">
        Finish
      </Button>
    </div>
  );
}

export default Page;
