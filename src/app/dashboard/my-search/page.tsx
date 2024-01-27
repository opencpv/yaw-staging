import MySearchItems from "./components/MySearchItems";

const MySearch = () => {
  return (
    <main className="mt-[-20px] w-full bg-my-search-bg bg-cover  bg-center px-8 pb-36">
      <h1 className="pb-12 pt-24 text-center text-4xl font-semibold text-white">
        My Search
      </h1>
      <MySearchItems />
    </main>
  );
};

export default MySearch;
