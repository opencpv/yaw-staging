import CaDeleteIcon from "../icons/CaDeleteIcon";

interface Props {
  onclick: () => void;
}
const DeleteIconButton = ({ onclick }: Props) => {
  return (
    <button
      className="p-4 rounded-md bg-[#F1F1F1] block h-fit"
      onClick={() => {
        onclick();
      }}
    >
      <CaDeleteIcon />
    </button>
  );
};

export default DeleteIconButton;
