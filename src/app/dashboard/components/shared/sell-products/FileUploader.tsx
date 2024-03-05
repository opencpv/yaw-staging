import CaUploadIcon from "@/app/components/icons/CaUploadIcon";
import ErrorMessage from "@/components/__shared/ui/ErrorMessage";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { cn } from "@/lib/utils";
import { useField } from "formik";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import Dropzone, {
  DropEvent,
  FileRejection,
  useDropzone,
} from "react-dropzone";
import { LiaTimesSolid } from "react-icons/lia";

interface Props {
  onFileSelect?: (file: File) => void;
}

const FileUploader = ({ onFileSelect }: Props) => {
  const [field, meta, helpers] = useField("images");

  const [files, setFiles] = React.useState<any[]>([]);
  const { onOpen } = useToastDisclosure();

  const onDropRejected = (
    fileRejections: FileRejection[],
    event: DropEvent,
  ) => {
    fileRejections.forEach((file) => {
      const { file: fileObj, errors } = file;
      onOpen(
        `❌ ${errors[0].code.replaceAll("-", " ")} - ${fileObj.name} | ${
          errors[0].code === "file-too-large"
            ? "Max file size is 2MB"
            : "Min file size is 100KB"
        }`,
        true,
      );
    });
  };

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (files.length + acceptedFiles.length > 10) {
        // max 5 files
        onOpen("❌ You can only upload up to 10 files", true);
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
    [files, onOpen, helpers],
  );

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <>
      <Dropzone
        maxFiles={5}
        minSize={100000}
        maxSize={2097152}
        onDrop={onDrop}
        onDropRejected={onDropRejected}
        multiple
        accept={{
          "image/jpeg": [],
          "image/png": [],
        }}
      >
        {/* minSize= 100kb, MaxSize is 2mb */}
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
                    "border-neutral-800": isDragActive,
                    "border-success-100": isDragAccept,
                    "border-error-100": isDragReject,
                  },
                )}
              >
                <CaUploadIcon />
                <p className="mt-4 text-center text-[13px]">
                  Select or drag and drop images here <br></br>( Minimum 3 )
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
        {files?.map((file: any) => (
          <Preview
            key={file.name}
            file={file}
            setFiles={setFiles}
            files={files}
          />
        ))}
      </ul>
      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </>
  );
};

export default FileUploader;

const Preview = ({ file, setFiles, files }: any) => {
  return (
    <li className="relative aspect-square w-28 rounded-md">
      <div className="absolute inset-0 z-10 h-full w-full rounded-[inherit] bg-black bg-opacity-20"></div>
      <LiaTimesSolid
        className="absolute right-2 top-1 z-20 cursor-pointer text-primary-500"
        onClick={() => {
          const newFiles = files?.filter((f: any) => f.name !== file.name);
          setFiles(newFiles);
        }}
      />
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
