import dynamic from "next/dynamic";
const AllReviewsModal = dynamic(
  () => import("@/components/__shared/ui/modals/all-reviews-modal"),
  {
    ssr: false,
  },
);
const Rating = dynamic(() => import("@/components/__shared/ui/ratings-form"), {
  ssr: false,
});

type Props = {
  type: string;
};
function UserAboutUs({ type }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-5">
        {" "}
        <h2 className=" text-shade-300 ">
          About Esther
        </h2>
        {type == "lister" && (
          <div className="flex items-center gap-3">
            <AllReviewsModal value={3} clickable={false} />
            <Rating value={3} />
          </div>
        )}
      </div>

      <p className="!max-w-full text-base leading-loose text-shade-300">
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
