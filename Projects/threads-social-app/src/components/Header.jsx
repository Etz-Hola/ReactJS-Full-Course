import { Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
// import RxAvatar from "./RxAvatar"

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);

  return (
    <Flex justifyContent={"space-between"} gap={300} mt={6} mb="12">
      {user && (
        <Flex>
          <Link as={RouterLink} to="/">
            <AiFillHome size={24} />
          </Link>
        </Flex>
      )}

      {/* {!user && (
        <Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("login")}> Login </Link>
      )} */}

      <Image
        className="toggle"
        alt="logo"
        cursor="pointer"
        w={6}
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleColorMode}
      />
      {user && (
        <Link as={RouterLink} to={`/${user.username}`}>
          <RxAvatar size={24} />
        </Link>
      )}
    </Flex>
  );
};

export default Header;
