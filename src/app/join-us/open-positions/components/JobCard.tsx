import Image from "next/image";
import JoinUsButtons from "../../components/JoinUsButtons";
import { JobType } from "../../types";
import JobDescriptionButton from "../../components/JobDescriptionButton";

type Props = {
  job: JobType;
};

function JobCard({ job }: Props) {
  return (
    <div className="rounded-xl border-[1px] border-shade-50 pb-4 w-full hover:scale-[1.02] cursor-pointer">
      <div className="flex flex-col gap-6 ">
        <div className="relative w-full aspect-[398/306] lg:aspect-[542/306]  rounded-t-xl overflow-hidden">
          <Image
            src={"/assets/images/joinus/creative-hand.jpeg"}
            alt={job.title}
            fill
            objectFit="cover"
          />
        </div>{" "}
        <div className="flex flex-col gap-8 px-4">
          <div className="flex flex-col gap-2">
            <p className="text-[1.25rem] font-semibold">{job.title}</p>
            <p className="leading-[22.4px] text-shade-200 max-w-[371px]  overflow-ellipsis overflow-hidden max-h-[45px] ">
              {job.description}
            </p>
          </div>
          <JobDescriptionButton />
        </div>
      </div>
    </div>
  );
}

export default JobCard;
