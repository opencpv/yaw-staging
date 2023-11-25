import ImageOptionsPopover from "./ImageOptionsPopover";


type Props = {
    remove: () => void;
    makeBannerImage: () => void;
  
    addCaption: () => void;
    file :any
  };

export const ImageCard = ({ file, remove, makeBannerImage, addCaption } :Props) => {
    return (
      <div
        className="rounded-2xl w-full aspect-[328/232] max-w-[328px] p-5"
        style={{
          backgroundImage: `url(${file?.preview})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundColor: "100%",
          backgroundRepeat: "no-repeat",
        }}>
  
        <ImageOptionsPopover remove={remove} makeBannerImage={makeBannerImage} addCaption={addCaption}/>
  
      </div>
    );
  };