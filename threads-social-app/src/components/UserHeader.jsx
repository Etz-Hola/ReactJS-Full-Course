import { Box, Flex, VStack, Text } from "@chakra-ui/layout"
import { Avatar } from "@chakra-ui/react"

const UserHeader = () => {
  return ( <VStack gap={4} alignItems={'start'}>
    <Flex justifyContent={'space-between'} w={'full'}>
        <Box>
            <Text 
                fontSize={"2xl"} 
                fontWeight={"bold"} >
                Aliu Musa
            </Text>
            <Flex  gap={2} alignItems={"center"}>
                <Text fontSize={"sm"}>aliumusa@99</Text>
                <Text fontSize={'xs'}
                bg={"gray.dark"}
                color={"gray.light"}
                p={1}
                borderRadius={"full"}>threads.net</Text>
            </Flex>
        </Box>

        <Box>
            <Avatar 
                name="Aliu Musa"
                src="/directorPro.jpeg"
                size={""}
            />
        </Box>

    </Flex>
  </VStack>
  )
}

export default UserHeader