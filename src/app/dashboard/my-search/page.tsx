import MySearchItems from "./components/MySearchItems";

const MySearch = () => {
  return (
    <main className="w-full mt-[-20px] pb-36 px-8  bg-my-search-bg bg-cover bg-center">
      <h1 className="text-white text-center font-semibold text-4xl pt-24 pb-12">
        My Search
      </h1>
      <MySearchItems />
    </main>
  );
};

export default MySearch;
