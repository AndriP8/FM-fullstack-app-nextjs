import { Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import GradientLayout from "../../components/GradientLayout";
// import SongTable from "../../components/songsTable";
import { validateToken } from "../../lib/auth";
import { Playlist } from "../../lib/hook";
import prisma from "../../lib/prisma";

interface PlaylistProps {
  playlist: Playlist;
}

const getBGColor = (id: number) => {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "gray",
    "teal",
    "yellow",
  ];

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const PlaylistUser = (props: PlaylistProps) => {
  const color = getBGColor(props.playlist.id);

  return (
    <GradientLayout
      color={color}
      roundImage={false}
      title={props.playlist.name}
      subtitle="playlist"
      description={`${props.playlist.songs.length} songs`}
      image={"https://picsum.photos/400?random=${props.playlist.id}"}
    >
      <Text>test</Text>
    </GradientLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  let user;

  try {
    user = validateToken(req.cookies.TRAX_ACCESS_TOKEN ?? "");
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }

  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: Number(query?.id),
      userId: 1,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: { playlist },
  };
};
export default PlaylistUser;
