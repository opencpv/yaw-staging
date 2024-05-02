import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "../index.module.css";
import Image from "next/image";
import { AddMoreImages, AddMoreImagesXl } from "./AddMoreImages";
import BannerImage from "./BannerImage";
import SlideEnter from "../SlideEnter";
import ImageOptionsPopover from "./ImageOptionsPopover";
import { ImageCard } from "./ImageCard";
import { useLocalStorage } from "@uidotdev/usehooks";
import { deleteFromCloudinary, handleFileDrop, uploadToCloudinary } from "./api";
import deleteImage from "./delete-image";

export default function ChooseImages() {
  const [files, setFiles] = useState<any>([]);
  const [listingImages, setListingimages] = useLocalStorage(
    "listing-images",
    []
  );


  const onDrop = useCallback((acceptedFiles: any) => {
    if (acceptedFiles?.length) {
      handleFileDrop(acceptedFiles, setFiles);
    }
  }, []);
  useEffect(() => {
    if (files?.length >= 1) {
      setListingimages(files);
    }
  }, [files]);

  useEffect(() => {
    if (listingImages) {
      setFiles(listingImages);
    }
  }, []);

  const remove = (publicId : any, index: any) => {
    // setFiles((previousFiles: any) => {
      deleteImage(publicId)
      // const updatedFiles = [...previousFiles];
      // updatedFiles.splice(index, 1);
      // return previousFiles;
    // });
  };

  const makeBannerImage = (index: any) => {
    if (index >= 0 && index < files.length) {
      const fileToMove = files[index];
      const updatedFiles = [...files];

      updatedFiles.splice(index, 1);
      updatedFiles.unshift(fileToMove);
      setFiles(updatedFiles);
    }
  };

  const addCaption = (index: any) => {};

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <form className="w-full flex flex-col items-center justify-center h-full lg:px-24 gap-[2rem]">
        <div className="w-full flex flex-col gap-8 items-start justify-center max-w-[1108px]">
          <div className=" ">
            <p className={`${styles.title} w-fit`}>
              Choose your property images
            </p>
            <p className="">
              You can remove or add an image after you publish your listing.
            </p>
          </div>
          <div className="flex flex-col items-end justify-center w-full h-full max-w-[1108px]">
            {files.length >= 1 && <AddMoreImages setFiles={setFiles} />}
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
              <BannerImage
                file={files?.[0]}
                remove={() => remove(files?.[0]?.preview?.public_id, 0)}
                makeBannerImage={() => makeBannerImage}
                addCaption={() => addCaption}
              />
            </div>
            {files?.slice(1)?.map((file: any, index: number) => (
              <div className="col-span-3 md:col-span-1" key={index}>
                <ImageCard
                  key={index}
                  file={file}
                  remove={() => remove(file?.preview?.public_id,index + 1)}
                  makeBannerImage={() => makeBannerImage(index + 1)}
                  addCaption={() => addCaption}
                />
              </div>
            ))}
            <div className="col-span-3 md:col-span-1">
              <AddMoreImagesXl setFiles={setFiles} />
            </div>{" "}
          </div>
        )}
      </form>
    </>
  );
}
