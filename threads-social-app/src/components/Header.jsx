import { Flex, Image, useColorMode } from "@chakra-ui/react"

const Header = () => {
    


  return <Flex justifyContent={"center"} mt={6} mb="12">
    <Image alt="logo"
        w={6}
        src={colorMode === dark ? "/light-logo.svg" : "/dark-logo.svg"}/>
    />
  </Flex>
}

export default Header