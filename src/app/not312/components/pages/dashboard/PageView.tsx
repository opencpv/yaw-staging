import SummaryCard from "../../cards/SummaryCard";

const PageView = () => {
  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold">Dashboard</h2>
      <div className="grid w-full grid-cols-6">
        <SummaryCard />
      </div>
    </div>
  );
};

export default PageView;
