import PageNotFound from "../components/__shared/ui/states/PageNotFound";
import SomethingWentWrong from "../components/__shared/ui/states/SomethingWentWrong";

function Page() {
  return (
    <div className="flex gap-5">
      <PageNotFound />
      <SomethingWentWrong />
    </div>
  );
}

export default Page;
