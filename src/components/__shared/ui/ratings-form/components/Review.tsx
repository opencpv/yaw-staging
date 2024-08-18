import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import { fadeIn } from "@/lib/animations";


function Review() {
  return (
    <FramerWrapper {...fadeIn} className="flex flex-col items-center  gap-4 w-full">
      <div className="w-full flex flex-col gap-1 items-start">
        <p className="text-shade-900">Your Review</p>

        <textarea name="review" 
        
        placeholder="What did you like or dislike ? What did you use this product for?"
        id="" className="p-5 focus:border-primary  resize-none focus:outline-none focus-visible:!border-primary appearance-none focus:border-2
        h-[14.75rem] w-full border-1 rounded-md border-shade-50">

        </textarea>
      </div>

      
    </FramerWrapper>
  );
}

export default Review;
