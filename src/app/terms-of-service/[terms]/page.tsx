import fetchTermsData from "../lib/fetchTermsData";
import TermsNav from "../components/TermsNav";
import TermsMainView from "./components/TermsMainView";
import Footer from "@/components/__shared/footer/Footer";

const Terms = async (props: any) => {
  const path = props.params.terms;
  const paths = path.split("/");
  const currentPath = paths[paths.length - 1];
  const data = await fetchTermsData();
  const terms: any = await data[0].termCategories;
  const currentTerms = terms.filter((obj: any) => obj.slug == currentPath);
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        {data && <TermsNav data={data[0]} primary={false} />}
        
        <div className={` w-full max-w-[1728px]`}>
          {data && <TermsMainView data={currentTerms[0]} />}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Terms;
