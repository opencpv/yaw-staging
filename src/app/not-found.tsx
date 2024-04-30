import Navbar from "@/components/__shared/ui/Navbar";
import PageNotFound from "../components/__shared/ui/states/PageNotFound";
import Footer from "@/components/__shared/ui/footer/Footer";

function Page() {
  return (
    <>
      <Navbar />
      <main className="flex gap-5">
        <PageNotFound />
      </main>
      <Footer />
    </>
  );
}

export default Page;
