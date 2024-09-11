
import AllReviewsModal from "@/components/__shared/ui/modals/all-reviews-modal";
import Rating from "@/components/__shared/ui/ratings-form";

type Props = {
  type: string;
};
function UserAboutUs({ type }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-5">
        {" "}
        <h2 className="text-base text-shade-300 md:text-2xl 2xl:text-3xl">
          About Esther
        </h2>
        {type == "lister" && (
          <div className="flex items-center gap-3">
            <AllReviewsModal value={3}  clickable={false}/>
            <Rating value={3} />
          </div>
        )}
      </div>

      <p className="text-base leading-loose text-shade-300 !max-w-full">
        Lorem ipsum dolor sit amet consectetur. At vulputate etiam elementum
        luctus nulla arcu nulla leo in. At leo eros nam nisl a. Quam mauris
        lacus nisi pulvinar platea nec. Quis tincidunt varius nunc vestibulum
        faucibus elit orci aliquam. Sit iaculis faucibus purus molestie pulvinar
        fermentum lacus mauris. At enim urna dui auctor augue sagittis est
        laoreet. A mi risus purus viverra risus sit. Montes ipsum dignissim
        consequat in. Vitae sagittis gravida eleifend porta a arcu ut at enim.
      </p>
    </div>
  );
}

export default UserAboutUs;
