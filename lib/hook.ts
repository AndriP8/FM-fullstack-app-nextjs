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
  firstname: string;
  lastname: string;
  playlistsCount: number;
}

export const useMe = () => {
  const { data, error } = useSWR<User>("/me", fetcher);

  console.log(data);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR<Playlist[]>("/playlist", fetcher);

  return {
    playlists: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};
