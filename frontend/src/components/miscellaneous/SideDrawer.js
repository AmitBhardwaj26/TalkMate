import React, { useState } from "react";
import { Box, Button, Tooltip, Text, Menu, MenuButton } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i class="fa-solid fa-magnifying-glass"></i>
            <Text
              display={{ base: "none", md: "flex" }}
              px="4"
              justifyContent="space-between"
              w="100%"
            >
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Work sans">
          Talk-A-Tive
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontsize="2xl" m={1} />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar size="sm" cursor="pointer" name="Amit" />
            </MenuButton>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default SideDrawer;
