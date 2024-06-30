import styles from "../../index.module.css";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";

const SearchTitle = () => {
  return (
    <div className="relative lg:top-32">
      <h2 className={`${styles.title}`}>Search Title <span className="text-sm text-shade-300">*</span></h2>
      <div className="max-w-sm">
        <TextFieldInput
          type="text"
          name="searchTitle"
          label="Provide a title for your search criteria"
          placeholder="Search title"
        />
      </div>
    </div>
  );
};

export default SearchTitle;
