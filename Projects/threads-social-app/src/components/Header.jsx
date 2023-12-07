import { Flex, Image, Link, useColorMode } from "@chakra-ui/react"
import { useRecoilValue } from "recoil"
import userAtom from "../atoms/userAtom"
import {AiFillHome} from "react-icons/ai"
import { Link as RouterLink } from "react-router-dom"
// import RxAvatar from "./RxAvatar"


const Header = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    const user = useRecoilValue(userAtom)

    
  return <Flex justifyContent={"center"} mt={6} mb="12">
      {user && (
        <Link as={RouterLink} to="/">
          <AiFillHome size={24} />
        </Link>
      )}
    <Image className="toggle" alt="logo" cursor="pointer"
        w={6}
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleColorMode}
    />
  </Flex>
}

export default Header