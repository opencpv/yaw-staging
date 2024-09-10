import FileInput from "@/components/__shared/ui/form/file-input";
import { useContactForm } from "./forms/hooks/useContactForm";

export const UploadFile = () => {
  const { setFile } = useContactForm();
  return (
    <FileInput placeholder="Upload File (Optional)" handleFile={setFile} />
  );
};
