import TermsNav from "../components/TermsNav";
import TermsMainView from "./components/TermsMainView";
import Footer from "@/components/__shared/footer/Footer";
import { TERMS_QUERY } from "@/lib/utils/sanity/queries";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";

const Terms = async (props: any) => {
  const path = props.params.terms;
  const paths = path.split("/");
  const currentPath = paths[paths.length - 1];
  const initial = await loadQuery<SanityDocument[]>(TERMS_QUERY);
  const data = initial.data[0];
  const terms: any = await data.termCategories;
  const currentTerms = terms.filter((obj: any) => obj.slug == currentPath);
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        {data && <TermsNav data={data} primary={false} />}

        <div className={` w-full max-w-[1728px]`}>
          {data && <TermsMainView data={currentTerms[0]} />}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Terms;
