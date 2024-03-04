import CaUploadIcon from "@/app/components/icons/CaUploadIcon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { FaTimes } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

interface Props {
  onFileSelect: (file: File) => void;
}
const FileUploader = ({ onFileSelect }: Props) => {
  const [files, setFiles] = React.useState([]);
  console.log(files);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      // Do something with the files
      let data = acceptedFiles.map((file: any) => (
        <Preview
          key={file.path}
          file={file}
          setFiles={setFiles}
          files={files}
        />
      ));
      setFiles(data);
    },
    [files],
  );

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  // const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles } =
  //   useDropzone({});

  return (
    <>
      <Dropzone
        maxFiles={5}
        minSize={100000}
        maxSize={2097152}
        onDrop={onDrop}
        multiple
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
                  "flex h-fit w-full flex-col items-center justify-center rounded-md border border-dashed border-neutral-400 p-20",
                  {
                    "border-primary-100": isDragActive,
                    "border-primary-500": isDragAccept,
                    "border-error-100": isDragReject,
                  },
                )}
              >
                <CaUploadIcon />
                <p className="mt-4 text-center text-[13px]">
                  Select or drag and drop images here <br></br>( Minimum 5 )
                </p>
                <p className="mt-2 text-[8px] opacity-[0.4]">
                  JPG, PNG file size no more than 10MB
                </p>
                <button
                  type="button"
                  className="mt-4 rounded-sm border bg-[#FBFDFE] px-3 py-2 text-[#8A8A8A]"
                >
                  Select file
                </button>
              </div>
            </div>
          </>
        )}
      </Dropzone>
      <ul className="mt-5 flex flex-wrap gap-5">{files}</ul>
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
      />
    </li>
  );
};
