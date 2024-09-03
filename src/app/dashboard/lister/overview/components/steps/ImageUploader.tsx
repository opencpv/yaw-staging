import style from "../../index.module.css";
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
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  ActionContent,
  ActionItem,
  ActionItemTrigger,
  ActionPopover,
} from "@/components/__shared/ui/popover/action-popover";
import { Button } from "@/components/__shared/ui/button/Button";
import { BiImageAdd } from "react-icons/bi";
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
  defaultBannerImage?: string | null;
}

type ContextType = {
  files: any[];
  setFiles: React.Dispatch<React.SetStateAction<any[]>>;
};

const FileContext = createContext<ContextType | null>(null);

const ImageUploader = ({}: Props) => {
  const [field, meta, helpers] = useField("images");

  const [files, setFiles] = React.useState<any[]>([]);

  const onDropRejected = useCallback(
    (fileRejections: FileRejection[], event: DropEvent) => {
      fileRejections.forEach((file) => {
        const { file: fileObj, errors } = file;
        toast.error(
          `${errors[0].code.replaceAll("-", " ")} - ${fileObj.name} | ${
            errors[0].code === "file-too-large"
              ? "Maximum file size is 5MB"
              : errors[0].code === "file-too-small"
                ? "Minimum file size is 200KB"
                : null
          }`,
        );
      });
    },
    [],
  );

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const newFiles = acceptedFiles.map(
        (
          file: any, // create new files
          index: number,
        ) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            is_banner: files?.some((f: any) => f.is_banner)
              ? file?.is_banner
              : index === 0, // assign is_banner to the first image if there is no banner
          }),
      );

      const newFilesArray = [...files, ...newFiles]; // combine old and new files
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
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <FileContext.Provider
      value={{
        files,
        setFiles,
      }}
    >
      <Dropzone
        // maxFiles={5}
        minSize={204800} // 200kb
        maxSize={5242880} // 5 mb
        onDrop={onDrop}
        onDropRejected={onDropRejected}
        multiple
        accept={{
          "image/jpeg": [],
          "image/jpg": [],
          "image/png": [],
          "images/webp": [],
        }}
        noDragEventsBubbling
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
                  "h-fit w-full rounded-md border border-dashed px-8 py-8 lg:min-h-[500px]",
                  {
                    "border-neutral-400":
                      !isDragActive && !isDragAccept && !isDragReject,
                    "border-neutral-800": isDragActive || isDragAccept,
                    "border-error-100": isDragReject,
                    "grid place-items-center": files?.length === 0,
                  },
                )}
              >
                {files?.length > 0 ? (
                  <section className="flex flex-col">
                    <AddMoreImages onlyButton />
                    <ul className="mt-5 grid gap-5 ssm:grid-cols-2 md:grid-cols-3">
                      {files
                        ?.sort((a: any, b: any) => b.is_banner - a.is_banner)
                        ?.map((file: any, index: number) => (
                          <Preview key={`${file.name}-${index}`} file={file} />
                        ))}
                      <AddMoreImages />
                    </ul>
                  </section>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center">
                    <CaUploadIcon />
                    <p className="mt-4 text-center text-[13px]">
                      Select or drag and drop images here <br></br>( 10 images
                      minimum )
                    </p>
                    <p className="mt-2 text-center text-[8px] opacity-[0.4]">
                      JPG, PNG, WEBP file size no more than 5MB and no less than
                      200KB
                    </p>
                    <button
                      type="button"
                      className="mt-4 rounded-lg border px-4 py-2 text-shade-200"
                    >
                      Select image
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </Dropzone>
      {meta.touched && meta.error && (
        <ErrorMessage name={meta.error}>{meta.error}</ErrorMessage>
      )}
    </FileContext.Provider>
  );
};

const Preview = ({ file }: { file: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const files = useContext(FileContext)?.files;
  const setFiles = useContext(FileContext)?.setFiles;
  const [field, meta, helpers] = useField("banner_image");

  const handleBannerImage = useCallback(() => {
    setIsOpen(false);
    files?.forEach((f: any) => {
      if (f.name === file.name) {
        Object.assign(f, { is_banner: true });
      } else {
        Object.assign(f, { is_banner: false });
      }
    });
    const newFiles = files?.map((f: any) => f);
    setFiles?.(newFiles as any);
  }, [file.name, files, setFiles]);

  const handleRemoveFile = useCallback(() => {
    setIsOpen(false);
    // Remove files and assign is_banner to another image
    const newFiles = files?.filter((f: any) => f.name !== file.name);

    const updatedFiles = newFiles?.map((file: any, index: number) =>
      Object.assign(file, {
        //preview: URL.createObjectURL(file),
        is_banner: newFiles?.some((f: any) => f.is_banner)
          ? file?.is_banner
          : index === 0, // assign is_banner to the first image if there is no banner
      }),
    );

    setFiles?.(updatedFiles as any);
  }, [file.name, files, setFiles]);

  const handleCaption = useCallback(() => {
    setIsOpen(false);
    const prompt = window.prompt("Enter caption", file?.caption);
    if (prompt) {
      Object.assign(file, { caption: prompt });
    }
  }, [file]);

  return (
    <li
      className={cn("relative aspect-video max-h-60 rounded-3xl", {
        "col-span-full w-full": file?.is_banner,
      })}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute inset-0 z-10 h-full w-full rounded-[inherit] bg-black bg-opacity-10" />
      <div className="absolute inset-4 z-10 flex flex-wrap gap-8 shadow-md">
        <div className="flex w-full justify-between gap-3">
          <div className="space-y-3">
            {file?.is_banner && (
              <motion.small
                initial={{ x: -5 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="h-fit rounded-xl bg-white p-3 text-center text-sm leading-4"
              >
                Banner image
              </motion.small>
            )}
            <ActionPopover
              isOpen={isOpen}
              onOpenChange={setIsOpen}
              placement="bottom-start"
            >
              <ActionItemTrigger
                onClick={() => setIsOpen(true)}
                className="grid h-9 w-9 place-items-center rounded-xl bg-white p-1.5 px-2"
              >
                <HiBars3BottomRight />
              </ActionItemTrigger>
              <ActionContent>
                {file?.is_banner !== true && (
                  <ActionItem onClick={handleBannerImage}>
                    Make Banner Image
                  </ActionItem>
                )}
                <ActionItem onClick={handleCaption}>
                  {file?.caption ? "Edit Caption" : "Add Caption"}
                </ActionItem>
                <ActionItem onClick={handleRemoveFile}>Remove</ActionItem>
              </ActionContent>
            </ActionPopover>
          </div>
          {file?.caption && (
            <div className="h-fit truncate rounded-full bg-black p-2 px-3 text-center text-sm leading-4 text-white">
              {file?.caption}
            </div>
          )}
        </div>
      </div>
      <Image
        src={URL.createObjectURL(file)}
        alt={file.name}
        fill
        className="fade-in rounded-[inherit] object-cover"
        // Revoke data uri after image is loaded
        onLoad={() => URL.revokeObjectURL(file.preview)}
      />
    </li>
  );
};

const AddMoreImages = ({ onlyButton }: { onlyButton?: boolean }) => {
  return (
    <>
      {onlyButton ? (
        <div className="cursor-pointer self-end">
          <Button
            variant="outline"
            className={cn(
              style.addMoreImagesButton,
              "fade-in-bottom-slight text-black",
            )}
            type="button"
          >
            Add More Images
            <BiImageAdd />
          </Button>
        </div>
      ) : (
        <div className="grid aspect-video cursor-pointer place-items-center rounded-lg border border-dashed border-shade-300">
          <Button
            variant="outline"
            className={cn(style.addMoreImagesButton, "text-black")}
            type="button"
          >
            Add More Images
            <BiImageAdd />
          </Button>
        </div>
      )}
    </>
  );
};

export default ImageUploader;
