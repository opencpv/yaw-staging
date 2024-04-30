import Image from "next/image";
import JoinUsButtons from "../../components/JoinUsButtons";
import { JobType } from "../../types";
import JobDescriptionButton from "../../components/JobDescriptionButton";

type Props = {
  job: JobType;
};

function JobCard({ job }: Props) {
  return (
    <div className="w-full cursor-pointer rounded-xl border-[1px] border-shade-50 pb-4 hover:scale-[1.02]">
      <div className="flex flex-col gap-6 ">
        <div className="relative aspect-[398/306] w-full overflow-hidden  rounded-t-xl lg:aspect-[542/306]">
          <Image src={job.imgUrl} alt={job.title} fill objectFit="cover" />
        </div>
        <div className="flex flex-col gap-8 px-4">
          <div className="flex flex-col gap-2">
            <p className="text-[1.25rem] font-semibold">{job.title}</p>
            <p className="max-h-[45px] max-w-[371px] overflow-hidden  overflow-ellipsis leading-[22.4px] text-shade-200 ">
              {job.description_brief}
            </p>
          </div>
          <JobDescriptionButton description={job.description} />
        </div>
      </div>
    </div>
  );
}

export default JobCard;
