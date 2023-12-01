import * as Dialog from "@radix-ui/react-dialog";
import CaDashDelete from "../../components/icons/CaDashDelete";
import "./main.css";
import supabase from "@/lib/utils/supabaseClient";
import { useRouter } from "next/navigation";

interface Props {
  id: number;
  table: string;
}
const DeleteProductButton = ({ id, table }: Props) => {
  const router = useRouter();
  const handleDeletion = async () => {
    const { error } = await supabase.from(table).delete().eq("id", id);

    if (!error) {
      router.refresh();
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="p-4 rounded-[8px] bg-[#F1F1F1] cursor-pointer flex justify-between items-center">
          <CaDashDelete />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">
            Do you want to delete the product ?
          </Dialog.Title>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
              gap: "8px",
            }}
          >
            <button
              className="Button bg-red-400 cursor-pointer"
              onClick={handleDeletion}
            >
              Yes
            </button>
            <Dialog.Close asChild>
              <button className="Button green cursor-pointer">No</button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DeleteProductButton;
