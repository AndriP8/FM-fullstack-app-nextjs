import useSwr from "swr";
import fetcher from "./fetcher";

export const usePlaylist = () => {
  const { data, error } = useSwr("/playlist", fetcher);

  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
