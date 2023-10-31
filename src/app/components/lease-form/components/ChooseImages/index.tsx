import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "../index.module.css";
import Image from "next/image";
import { AddMoreImages, AddMoreImagesXl } from "./AddMoreImages";
import BannerImage from "./BannerImage";
import SlideEnter from "../SlideEnter";

const ImageCard = ({ file }) => {
  return (
    <div
      className="rounded-2xl w-full aspect-[328/232] max-w-[328px]"
      style={{
        backgroundImage: `url(${file?.preview})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        backgroundColor: "100%",

        backgroundRepeat: "no-repeat",
      }}>
      <div className="flex flex-col  w-full "></div>
    </div>
  );
};

export default function ChooseImages() {
  const [files, setFiles] = useState<any>([]);
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
    <SlideEnter>
      <form className="w-full flex flex-col items-center justify-center h-full px-24 gap-[2rem]">
        <div className="w-full lg:w-[75%] flex flex-col gap-8 items-center justify-center max-w-[1108px]">
          <div className="w-full ">
            <p className={`${styles.title} w-fit`}>
              Choose your property images
            </p>
            <p className="w-full">
              You can remove or add an image after you publish your listing.
            </p>
          </div>
          <div className="flex flex-col items-end justify-center w-full h-full max-w-[1108px]">
            {files.length >= 1 && <AddMoreImages />}
            {files.length < 1 && (
              <div
                {...getRootProps({})}
                className="max-w-[1108px] max-h-[640px] aspect-[1108/640] w-full h-full rounded-[0.47181rem] border-[0.755px] border-[#00000040] flex items-center justify-center">
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here</p>
                ) : (
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <p className="text-[0.8125rem] text-center font-[400] ">
                      Select or drag and drop images here <br /> ( Maximum 10 )
                    </p>
                    <p></p>
                    <p className="text-[#00000066] text-[0.5rem] font-[400]">
                      JPG, PNG file size no more than 10MB
                    </p>
                    <p className="text-[#B4B4B4] box-[1px_3px_13px_0px_rgba(0,0,0,0.10)] border-[1px] border-[#B4B4B4] max-w-[100px] max-h-[38px]  w-full h-[38px] flex items-center justify-center rounded-lg text-[13px]">
                      Select File
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {files.length >= 1 && (
          <div className="grid grid-cols-3 gap-5 w-full max-w-[1108px]">
            <div className="col-span-3 h-full">
              <BannerImage file={files?.[0]} />
            </div>
            {files?.map((file, index) => (
              <div className="col-span-3 lg:col-span-1">
                <ImageCard key={index} file={file} />
              </div>
            ))}

            <AddMoreImagesXl setFiles={setFiles} />
          </div>
        )}
      </form>
    </SlideEnter>
  );
}
