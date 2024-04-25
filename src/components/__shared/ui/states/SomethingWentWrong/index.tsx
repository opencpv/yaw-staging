import { useRouter } from "next/navigation";
import CaTriangle from "./CaTriangle";
import { cn } from "@/lib/utils";
import Button from "@/components/__shared/ui/button/Button";
import { IoCloudOfflineOutline } from "react-icons/io5";

type Props = {
  className?: string;
  onTryAgain?: () => void;
  error?: Error & { digest?: string };
  reset?: () => void;
};

function SomethingWentWrong({ className, onTryAgain, reset, error }: Props) {
  const router = useRouter();
  const hasInternet = navigator.onLine;

  return (
    <div className={cn("col-span-full h-svh w-full", className)}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <div
          className="aspect-square animate-bounce"
          style={{ animationDuration: "2s" }}
        >
          {hasInternet ? <CaTriangle /> : <IoCloudOfflineOutline size={108} />}
        </div>
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <h3>Oops, Something went wrong</h3>
            <p className="text-shade-200">
              {hasInternet
                ? "Sorry, there seems to be an error performing this action."
                : "It seems you are offline. Check your internet connection."}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Button color="accent" onClick={() => router.back()}>
              Go Back
            </Button>
            <Button
              variant="outline"
              onClick={() => onTryAgain?.()}
              className={cn("border border-accent-200 text-accent-200", {
                hidden: !onTryAgain,
              })}
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SomethingWentWrong;
