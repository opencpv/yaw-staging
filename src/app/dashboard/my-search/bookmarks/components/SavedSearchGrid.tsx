import SavedSearchCard from "./SavedSearchCard";

const SavedSearchGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: 5 }).map((r, index) => (
        <div className="col-span-3 md:col-span-2 lg:col-span-1" key={index}>
          <SavedSearchCard data={r} />
        </div>
      ))}
    </div>
  );
};

export default SavedSearchGrid;
