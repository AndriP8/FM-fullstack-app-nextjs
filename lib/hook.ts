import useSWR from "swr";
import fetcher from "./fetcher";

export interface Song {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  artistId: number;
  duration: number;
  url: string;
}

export interface Playlist {
  createdAt: string;
  id: number;
  name: string;
  updatedAt: string;
  userId: number;
  songs: Song[];
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
