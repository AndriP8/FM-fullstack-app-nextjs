import {
  Box,
  Divider,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import {
  MdFavorite,
  MdHome,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdSearch,
} from "react-icons/md";
import { usePlaylist } from "../lib/hook";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const playlists = new Array(30).fill(1).map((_, idx) => `Playlist ${idx + 1}`);

const Sidebar = () => {
  const { playlists } = usePlaylist();
  return (
    <Box
      width="full"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="full">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <Image src="/logo.svg" height="60" width="120" alt="logo" />
        </Box>
        <Box marginBottom="20px">
          <List spacing="2">
            {navMenu.map((menu, idx) => (
              <ListItem key={idx} paddingX="20px" fontSize="16px">
                <LinkBox>
                  <Link href={menu.route} passHref legacyBehavior>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box marginY="20px">
          <List spacing="2">
            {musicMenu.map((menu, idx) => (
              <ListItem key={idx} paddingX="20px" fontSize="16px">
                <LinkBox>
                  <Link href={menu.route} passHref legacyBehavior>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="60%" overflowY="auto" marginTop="20px">
          <List spacing="2">
            {playlists.map((playlist, idx) => (
              <ListItem paddingX="20px" key={idx}>
                <Link href="/" passHref legacyBehavior>
                  <LinkOverlay>{playlist.name}</LinkOverlay>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
export default Sidebar;
