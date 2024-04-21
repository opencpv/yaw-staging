import InputWithSavedSearch from "@/components/__shared/form/InputWithSavedSearch";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  className?: string;
};

const Search = ({ className }: { className?: string }) => {
  const [search, setSearch] = React.useState<string>("");
  const router = useRouter();
  const placeholder = "Madina, Accra";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    setSearch(search);
    router.push(
      `/properties?${new URLSearchParams({
        search: search || placeholder,
        sk: String(true),
      })}`,
    );
  };

  return (
    <InputWithSavedSearch
      className={cn(
        "h-[52px] max-h-[52px] max-w-lg rounded-[4px] bg-[#F9F9F9] md:h-[42px] xl:min-w-[420px] 2xl:aspect-[620/52] 2xl:h-[52px]",
        className,
      )}
      inputClassName="rounded-[4px] border-0 px-4 py-1"
      separatorClassName="h-[60%]"
      href={`/properties?${new URLSearchParams({
        search: search || placeholder,
        sk: String(true),
      })}`}
      onSubmit={handleSubmit}
      name="search"
    />
  );
};

export default Search;
