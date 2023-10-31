import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export const AddMoreImages = () => {
    return (
      <p className="text-[#B4B4B4] box-[1px_3px_13px_0px_rgba(0,0,0,0.10)] border-[1px] border-[#B4B4B4] max-w-[177px] max-h-[38px]  w-full min-h-[38px]  aspect-[100/38]   flex items-center justify-center rounded-lg text-[13px] whitespace-nowrap">
        Add More Images
      </p>
    );
  };



export const AddMoreImagesXl = ({ setFiles }) => {
    const onDrop = useCallback((acceptedFiles: any) => {
      if (acceptedFiles?.length) {
        setFiles((previousFiles: any) => [
          ...previousFiles,
          ...acceptedFiles.map((file: any) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          ),
        ]);
      }
    }, []);
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  
    return (
      <div
        {...getRootProps({})}
        className="aspect-[328/232]  max-w-[328px] w-full rounded-2xl border-[0.755px] border-[#000] border-dashed flex items-center justify-center">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here</p>
        ) : (
          <p className="text-[#B4B4B4] box-[1px_3px_13px_0px_rgba(0,0,0,0.10)] border-[1px] border-[#B4B4B4] max-w-[177px] max-h-[38px] aspect-[100/38]  w-full min-h-[38px] flex items-center justify-center rounded-lg text-[13px] whitespace-nowrap">
            Add More Images
          </p>
        )}
      </div>
    );
  };