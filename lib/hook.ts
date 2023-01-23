import useSWR from "swr";
import fetcher from "./fetcher";

interface Playlist {
  createdAt: string;
  id: number;
  name: string;
  updatedAt: string;
  userId: number;
}

interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  playlistsCount: number;
}

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);

  return {
    user: data as User,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR("/playlist", fetcher);

  return {
    playlists: (data as Playlist[]) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
