export default function BannerImage({ file }) {
  return (
    <div
      className="w-full h-full min-h-[298px] rounded-2xl"
      style={{
        backgroundImage: `url(${file?.preview})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        backgroundColor: "100%",

        backgroundRepeat: "no-repeat",
      }}>

        
      </div>
  );
}
