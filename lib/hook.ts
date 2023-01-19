import useSwr from "swr";
import fetcher from "./fetcher";

interface Playlist {
  createdAt: string;
  id: number;
  name: string;
  updatedAt: string;
  userId: number;
}

export const usePlaylist = () => {
  const { data, error } = useSwr("/playlist", fetcher);

  return {
    playlists: (data as Playlist[]) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
