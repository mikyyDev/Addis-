import { Plus } from "lucide-react";

import { useSongStore } from "../../../../store/song.store";

import { Button } from "./AddSongButton.styles";

const AddSongButton = () => {
  const { openCreateSongModal } = useSongStore();

  return (
    <Button onClick={openCreateSongModal}>
      <Plus size={18} />
      Add Song
    </Button>
  );
};

export default AddSongButton;
