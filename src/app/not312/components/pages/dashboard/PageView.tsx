import { route } from "@/lib/utils/routes";
import SummaryCard from "../../cards/SummaryCard";

const PageView = () => {
  return (
    <div className="p-8">
      <h2 className="mb-8  text-3xl font-bold ">Dashboard</h2>
      <div className="grid w-full grid-cols-5 gap-8">
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
        <SummaryCard
          title="FAQs"
          link="/not312/dashboard/faq"
          api={route.faqCount}
        />
        <SummaryCard
          title="Contacts"
          link="/not312/dashboard/contact"
          api={route.contactsCount}
        />
        <SummaryCard
          title="Applicants"
          link="/not312/dashboard/applicants"
          api={route.applicantsCount}
        />
        <SummaryCard
          title="Featured Properties"
          link="/not312/dashboard/featured-properties"
          api={route.featuredPropertiesCount}
        />
      </div>
    </div>
  );
};

export default PageView;
