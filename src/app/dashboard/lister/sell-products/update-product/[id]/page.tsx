import dynamic from "next/dynamic";

const UpdateItemPage = dynamic(
  () =>
    import(
      "@/app/dashboard/components/shared/sell-products/pages/UpdateItemPage"
    ),
);

const UpdateProduct = () => {
  return <UpdateItemPage />;
};

export default UpdateProduct;
