import CaDeleteIcon from "../icons/CaDeleteIcon";

interface Props {
  onclick: () => void;
}
const DeleteIconButton = ({ onclick }: Props) => {
  return (
    <button
      className="block h-fit rounded-md bg-secondary-50 p-4"
      onClick={() => {
        onclick();
      }}
    >
      <CaDeleteIcon />
    </button>
  );
};

export default DeleteIconButton;
