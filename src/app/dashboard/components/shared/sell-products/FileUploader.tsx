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
          <div className="border-[1px]  w-full h-[100%] flex flex-col items-center justify-center rounded-md">
            <CaUploadIcon />
            <p className="text-center text-[13px] mt-4">
              Select or drag and drop images here <br></br>( Maximum 5 )
            </p>
            <p className="text-[8px] opacity-[0.4] mt-2 ">
              JPG, PNG file size no more than 10MB
            </p>
            <button className="px-3 py-2 bg-[#FBFDFE] mt-4 text-[#8A8A8A]">
              Select file
            </button>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default FileUploader;
