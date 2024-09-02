import dynamic from "next/dynamic";

 const Navbar = dynamic(() => import("@/components/__shared/ui/Navbar"));
 const PageNotFound = dynamic(
   () => import("../components/__shared/ui/states/PageNotFound"),
 );
 const Footer = dynamic(() => import("@/components/__shared/ui/footer/"));

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
