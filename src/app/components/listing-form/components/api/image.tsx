import supabase from "@/lib/utils/supabaseClient";

export const submitImage = async (property: number, images: any) => {
  const imageRecords = images.map((image : any) => ({
    property_id: property,
    filename: image?.filename,
    filesize: image?.preview?.filesize,
    public_url: image?.preview?.secure_url,
    imageType: image?.preview?.bannerType,
    mime_type: image?.mimeType,
  }));
  const { data, error } = await supabase
    .from("property_images")
    .insert(imageRecords)
    .select();
};
