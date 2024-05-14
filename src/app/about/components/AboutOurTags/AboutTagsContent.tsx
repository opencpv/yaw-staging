type TagsData = {
  name: string;
  description: string;
  image: string;
};

type Props = {
  data: TagsData;
};

function AboutTagsContent({ data }: Props) {
  return <div>{data?.description}</div>;
}

export default AboutTagsContent;
