import CaUploadIcon from "@/components/__shared/ui/icons/CaUploadIcon";
import { cn } from "@/lib/utils";
import { useField } from "formik";
import Image from "next/image";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Dropzone, { DropEvent, FileRejection } from "react-dropzone";
import { HiBars3BottomRight } from "react-icons/hi2";
import {
  ActionContent,
  ActionItem,
  ActionItemTrigger,
  ActionPopover,
} from "../../../../../components/__shared/ui/popover/action-popover";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
const ErrorMessage = dynamic(
  () => import("@/components/__shared/ui/states/error-message"),
);

interface Props {
  name?: string;
  /** minimum file size in bytes */
  minSize?: { byte: number; kb?: string; mb?: string };
  /** maximum file size in bytes */
  maxSize?: { byte: number; kb?: string; mb?: string };
  onFileSelect?: (file: File) => void;
  defaultImages?: File[];
  defaultPrimaryImage?: string | null;
}

type ContextType = {
  files: any[];
  setFiles: React.Dispatch<React.SetStateAction<any[]>>;
  primaryImage: string | undefined;
  setPrimaryImage: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const FileContext = createContext<ContextType | null>(null);

const FileUploader = ({
  onFileSelect,
  defaultImages = [],
  defaultPrimaryImage = null,
}: Props) => {
  const [field, meta, helpers] = useField("images");

  const [primaryImage, setPrimaryImage] = React.useState<string | undefined>(
    undefined,
  );
  const [files, setFiles] = React.useState<any[]>([]);

  const onDropRejected = (
    fileRejections: FileRejection[],
    event: DropEvent,
  ) => {
    fileRejections.forEach((file) => {
      const { file: fileObj, errors } = file;
      toast.error(
        `${errors[0].code.replaceAll("-", " ")} - ${fileObj.name} | ${
          errors[0].code === "file-too-large"
            ? "Maximum file size is 2MB"
            : errors[0].code === "file-too-small"
              ? "Minimum file size is 100KB"
              : null
        }`,
      );
    });
  };

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (files.length + acceptedFiles.length > 5) {
        toast.error("You can only upload up to 5 files");
        return;
      }

      const newFiles = acceptedFiles.map(
        (
          file: any, // create new files
        ) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
      );

      const newFilesArray = [...files, ...newFiles]; // combine old and new files
      setPrimaryImage(newFilesArray[0].name);
      setFiles(
        newFilesArray.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );

      helpers.setValue(
        newFilesArray.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
    [files, helpers],
  );

  useEffect(() => {
    if (defaultImages?.length > 0) {
      setFiles(defaultImages);
      // setPrimaryImage(defaultPrimaryImage as string);
    }
  }, [defaultImages]);

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <FileContext.Provider
      value={{ files, setFiles, primaryImage, setPrimaryImage }}
    >
      <Dropzone
        // maxFiles={5}
        minSize={102400} // 100kb
        maxSize={2097152} // 2mb
        onDrop={onDrop}
        onDropRejected={onDropRejected}
        multiple
        accept={{
          "image/jpeg": [],
          "image/png": [],
        }}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
        }) => (
          <>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div
                className={cn(
                  "flex h-fit w-full flex-col items-center justify-center rounded-md border border-dashed px-8 py-20 lg:px-20",
                  {
                    "border-neutral-400":
                      !isDragActive && !isDragAccept && !isDragReject,
                    "border-neutral-800": isDragActive || isDragAccept,
                    "border-error-100": isDragReject,
                  },
                )}
              >
                <CaUploadIcon />
                <p className="mt-4 text-center text-[13px]">
                  Select or drag and drop images here <br></br>( Maximum 5 )
                </p>
                <p className="mt-2 text-center text-[8px] opacity-[0.4]">
                  JPG, PNG file size no more than 2MB and no less than 100KB
                </p>
                <button
                  type="button"
                  className="mt-4 rounded-md border bg-[#FBFDFE] px-3 py-2 text-[#8A8A8A]"
                >
                  Select file
                </button>
              </div>
            </div>
          </>
        )}
      </Dropzone>
      <ul className="mt-5 flex flex-wrap gap-5">
        {files?.map((file: any, index: number) => (
          <Preview
            key={`${file.name}-${index}`}
            file={file}
            isPrimary={file.name === primaryImage}
          />
        ))}
      </ul>
      {meta.touched && meta.error && (
        <ErrorMessage name={meta.error}>{meta.error}</ErrorMessage>
      )}
    </FileContext.Provider>
  );
};

export default FileUploader;

const Preview = ({ file, isPrimary }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const files = useContext(FileContext)?.files;
  const setFiles = useContext(FileContext)?.setFiles;
  const primaryImage = useContext(FileContext)?.primaryImage;
  const setPrimaryImage = useContext(FileContext)?.setPrimaryImage;
  const [field, meta, helpers] = useField("primaryImage");

  const handlePrimaryImage = useCallback(() => {
    if (file.name === primaryImage) {
      setPrimaryImage?.(undefined);
      helpers.setValue("");
    } else {
      setPrimaryImage?.(file.name);
      helpers.setValue(file.name);
    }
  }, [file.name, helpers, primaryImage, setPrimaryImage]);
  return (
    <li className="relative aspect-video w-40 rounded-md">
      <div className="absolute inset-0 z-10 h-full w-full rounded-[inherit] bg-black bg-opacity-20" />
      <div className="absolute inset-2 z-10 flex flex-wrap gap-8 shadow-md">
        <ActionPopover
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          placement="bottom"
        >
          <ActionItemTrigger
            onClick={() => setIsOpen(true)}
            className="w-5.5 grid h-6 place-items-center rounded-sm bg-white p-0.5"
          >
            <HiBars3BottomRight />
          </ActionItemTrigger>
          <ActionContent>
            <ActionItem onClick={handlePrimaryImage}>
              {file.name === primaryImage
                ? "Remove Primary Image"
                : "Make Primary Image"}
            </ActionItem>
            <ActionItem
              onClick={() => {
                const newFiles = files?.filter(
                  (f: any) => f.name !== file.name,
                );
                setFiles?.(newFiles as any);
              }}
            >
              Remove
            </ActionItem>
          </ActionContent>
        </ActionPopover>
        {isPrimary && (
          <motion.small
            initial={{ x: -5 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-fit rounded-md bg-white p-0.5 px-3 text-center text-[0.6rem] leading-4"
          >
            Primary image
          </motion.small>
        )}
      </div>
      <Image
        src={URL.createObjectURL(file)}
        alt="preview"
        fill
        style={{ objectFit: "cover" }}
        className="rounded-[inherit]"
        // Revoke data uri after image is loaded
        onLoad={() => URL.revokeObjectURL(file.preview)}
      />
    </li>
  );
};
