import CaUploadIcon from "@/app/components/icons/CaUploadIcon";
import React, { useCallback, useEffect } from "react";
import Dropzone, { useDropzone } from "react-dropzone";

interface Props {
  onFileSelect: (file: File) => void;
}
const FileUploader = ({ onFileSelect }: Props) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({});

  return (
    <Dropzone>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} className="h-full">
          <input {...getInputProps()} />
          <div className="flex  h-[100%] w-full flex-col items-center justify-center rounded-md border-[1px]">
            <CaUploadIcon />
            <p className="mt-4 text-center text-[13px]">
              Select or drag and drop images here <br></br>( Maximum 5 )
            </p>
            <p className="mt-2 text-[8px] opacity-[0.4] ">
              JPG, PNG file size no more than 10MB
            </p>
            <button className="mt-4 bg-[#FBFDFE] px-3 py-2 text-[#8A8A8A]">
              Select file
            </button>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default FileUploader;
