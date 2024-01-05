import PageNotFound from "./components/PageNotFound";
import SomethingWentWrong from "./components/SomethingWentWrong";

function Page() {
  return (
    <div className="flex gap-5">
      <PageNotFound />
      <SomethingWentWrong />
    </div>
  );
}

export default Page;
