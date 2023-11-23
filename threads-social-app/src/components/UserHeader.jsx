import { Box, Flex, VStack, Text } from "@chakra-ui/layout"

const UserHeader = () => {
  return ( <VStack gap={4} alignItems={'start'}>
    <Flex justifyContent={'space-between'} w={'full'}>
        <Box>
            <Text fontSize={"2xl"} fontWeight={"bold"} >
                Aliu Musa
            </Text>
        </Box>

    </Flex>
  </VStack>
  )
}

export default UserHeader