import UniqueIdForm from "./components/UniqueIdForm";

function Page() {
  return (
    <main className="bg-shade h-screen">
      <div className="flex h-[300px] w-full items-center justify-center bg-[url('/assets/images/b2b-home.png')] bg-cover bg-no-repeat text-[2.4375rem] font-bold text-white lg:h-[468px]">
        <h1 className="text-2xl uppercase sm:text-3xl">invoices & receipts</h1>
      </div>
      <section className="px-5">
        <UniqueIdForm />
      </section>
    </main>
  );
}

export default Page;
