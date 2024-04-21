import { route } from "@/lib/utils/routes";
import SummaryCard from "../../cards/SummaryCard";

const PageView = () => {
  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold">Dashboard</h2>
      <div className="grid w-full grid-cols-6 space-x-8">
        <SummaryCard
          title="Feedbacks"
          link="/not312/dashboard/feedback"
          api={route.feedbackCount}
        />

        <SummaryCard
          title="Subscribers"
          link="/not312/dashboard/subscribers"
          api={route.subscribersCount}
        />
      </div>
    </div>
  );
};

export default PageView;
