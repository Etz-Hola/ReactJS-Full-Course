import { useRef, useState } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    Textarea,
    Text,
    Input,
    Flex,
    Image,
    CloseButton,
} from '@chakra-ui/react'
import usePreviewImg from '../hooks/usePreviewImg'
import { BsFillImageFill } from 'react-icons/bs'


const CreatePosts = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { postText, setPostText } = useState('')
    const imageRef = useRef(null)
    const {handleImageChange, imdUrl, setImgUrl} = usePreviewImg()

    const handleTextChange = () => {}
    const handleCreatePost = () => {}
    
    return (
        <>
            <Button
                position={'fixed'}
                bottom={10}
                right={10}
                leftIcon={<AddIcon />}
                bg={"gray"}
                onClick={onOpen}
            >
                Post
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pd={6}>
                        <FormControl>
                            <Textarea
                                placeholder='Post Content goes here'
                                onChange={handleTextChange}
                                value={postText}
                            />
                            <Text fontSize="xs" fontweight="bold" textAlign={"right"} m={1} color={"gray.800"}>
                                500/500
                            </Text>
                            <Input type="file" hidden ref={imageRef} onChange={handleImageChange}/>
                            
                            <BsFillImageFill 
                                style={{marginLeft: "5px",cursor: "pointer"}}
                                size={16}
                                onClick={() => imageRef.current.click()}
                            />
                        </FormControl>

                        {imdUrl &&  (
                            <Flex
                                mt={"full"}
                                position={"relative"}
                            >
                                <Image src={imdUrl} alt='select img'/>
                                <CloseButton 
                                    onClick={() => {
                                        setImgUrl('')                                        
                                    }}
                                    bg={"gray.800"}
                                    position={"absolute"}
                                    top={2}
                                    right={2}
                                />

                            </Flex>

                        )}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleCreatePost} isLoading={loading}>
                            Post
                        </Button>
                        
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


//////////
export default CreatePosts