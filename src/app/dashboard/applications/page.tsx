import React from "react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import ApplicationRow from "./components/ApplicationRow";
import ApplicationRow2 from "./components/ApplicationRow2";

const ApplicationsPage = () => {
  const { images } = useAssets();
  return (
    <main className="mx-auto max-w-screen-2xl text-neutral-800">
      <section className="mb-6">
        <h2 className="text-2xl font-[600] mb-2">Applications</h2>
        <small className="inline-block text-sm capitalize">
          Showing 07 Results
        </small>
      </section>
      {/* Table */}
      <table className="hidden w-full mb-20 table-fixed lg:table">
        <thead className="text-white bg-primary-400">
          <tr className="">
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Applicant
            </th>
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Property
            </th>
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Posted on
            </th>
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Status
            </th>
            <th className="p-3 text-center font-[500] capitalize text-sm">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <ApplicationRow
            propertyTitle="Property Title"
            propertyImage="/assets/images/Stock.jpg"
            applicantImage="/assets/images/profile-image.jpg"
            applicantName="Jane Cooper"
            propertyPrice={30000}
            date="2023-08-31 13:23:00"
          />
          <ApplicationRow
            propertyTitle="Property Title"
            propertyImage="/assets/images/Stock.jpg"
            applicantImage="/assets/images/profile-image.jpg"
            applicantName="Jane Cooper"
            propertyPrice={30000}
            date="2023-10-23 1:10:00"
          />
          <ApplicationRow
            propertyTitle="Property Title"
            propertyImage="/assets/images/Stock.jpg"
            applicantImage="/assets/images/profile-image.jpg"
            applicantName="Jane Cooper"
            propertyPrice={30000}
            date="2023-08-15 13:53:00"
          />
          <ApplicationRow
            propertyTitle="Property Title"
            propertyImage="/assets/images/Stock.jpg"
            applicantImage="/assets/images/profile-image.jpg"
            applicantName="Jane Cooper"
            propertyPrice={30000}
            date="2023-01-30 8:40:20"
          />
          <ApplicationRow
            propertyTitle="Property Title"
            propertyImage="/assets/images/Stock.jpg"
            applicantImage="/assets/images/profile-image.jpg"
            applicantName="Jane Cooper"
            propertyPrice={30000}
            date="2023-05-1 10:01:00"
          />
        </tbody>
      </table>
      {/* Small screen view */}
      <section className="mt-3 mb-20 space-y-5 lg:hidden">
        <ApplicationRow2
          propertyTitle="Property Title"
          propertyImage="/assets/images/Stock.jpg"
          applicantImage="/assets/images/profile-image.jpg"
          applicantName="Jane Cooper"
          propertyPrice={30000}
          date="2023-08-31 13:23:00"
        />
        <ApplicationRow2
          propertyTitle="Property Title"
          propertyImage="/assets/images/Stock.jpg"
          applicantImage="/assets/images/profile-image.jpg"
          applicantName="Jane Cooper"
          propertyPrice={30000}
          date="2023-10-23 1:10:00"
        />
        <ApplicationRow2
          propertyTitle="Property Title"
          propertyImage="/assets/images/Stock.jpg"
          applicantImage="/assets/images/profile-image.jpg"
          applicantName="Jane Cooper"
          propertyPrice={30000}
          date="2023-08-15 13:53:00"
        />
        <ApplicationRow2
          propertyTitle="Property Title"
          propertyImage="/assets/images/Stock.jpg"
          applicantImage="/assets/images/profile-image.jpg"
          applicantName="Jane Cooper"
          propertyPrice={30000}
          date="2023-01-30 8:40:20"
        />
        <ApplicationRow2
          propertyTitle="Property Title"
          propertyImage="/assets/images/Stock.jpg"
          applicantImage="/assets/images/profile-image.jpg"
          applicantName="Jane Cooper"
          propertyPrice={30000}
          date="2023-05-1 10:01:00"
        />
      </section>
    </main>
  );
};

export default ApplicationsPage;
