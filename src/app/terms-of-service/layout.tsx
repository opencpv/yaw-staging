import TermsMenuWrapper from "./TermsMenuWrapper";
import { TERMS_QUERY } from "@/lib/utils/sanity/queries";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";

const Layout = async ({children} : {children : React.ReactNode})  =>{
    const initial = await loadQuery<SanityDocument[]>(TERMS_QUERY);
    const data = initial.data[0];
    return (
        <TermsMenuWrapper data={data.termsCategories}>
            {children}
        </TermsMenuWrapper>
      );
}

export default Layout;