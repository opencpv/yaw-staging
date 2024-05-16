import Link from "next/link";
import { useTermsMenuStore } from "./components/useTermsMenuStore";

export const MobileMenu = (props: any) => {
  // const { setToggle } = useMenuStore();
  const { setTermsMenuToggle } = useTermsMenuStore();

  return (
    <div className={`px-8 pt-10 ${props?.className}`}>
      {/* Before login */}

      {/* After login */}
      <div>
        {props?.data &&
          props?.data?.map((category: any, index: number) => (
            <Link
              href={`/terms-of-service/${category.slug}`}
              key={index}
              className="mb-10 block"
              onClick={() => setTermsMenuToggle(false)}
            >
              <p className={"text-2xl !font-semibold uppercase text-[#fff]"}>
                {category.title}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};
