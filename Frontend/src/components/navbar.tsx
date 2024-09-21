import { Flex, Box, Heading, Spacer, ButtonGroup, Button, Link, Input, InputGroup, InputRightElement, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { IoIosSearch, IoMdCart, IoIosMenu } from "react-icons/io";

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex color='white' backgroundColor="#39A7FF" minWidth="max-content" alignItems="center" p={4} flexWrap="wrap">
            <Box p="2">
                <Heading size="md" textColor='#FFEED9' fontWeight='bold' fontSize='2xl'>Ikebal TopUp</Heading>
            </Box>

            <Spacer />

            <Box display={{ base: "none", md: "block" }} p="2" mt='1'>
                <Link pe="5" textColor='#FFEED9' fontWeight='bold' fontSize='md'>Store</Link>
                <Link pe="5" textColor='#FFEED9' fontWeight='bold' fontSize='md'>Discover</Link>
                <Link pe="5" textColor='#FFEED9' fontWeight='bold' fontSize='md'>About</Link>
            </Box>

            <Spacer />

            <Box p="2" mt='1' flex="1" display={{ base: "none", md: "block" }}>
                <InputGroup>
                    <InputRightElement pointerEvents='none'>
                        <IoIosSearch color='gray.300' />
                    </InputRightElement>
                    <Input variant='outline' bgColor='white' w='500px' placeholder='Search...' size='md' textColor='black' />
                </InputGroup>
            </Box>

            <Box p="2" mt='1'>
                <Link>
                    <IoMdCart size='23px' />
                </Link>
            </Box>

            <Spacer display={{ base: "none", md: "block" }} />

            <ButtonGroup gap="2" display={{ base: "none", md: "block" }}>
                <Button backgroundColor="#87C4FF" textColor='#FFEED9'>Sign Up</Button>
                <Button backgroundColor="#87C4FF" textColor='#FFEED9'>Log in</Button>
            </ButtonGroup>

            <IconButton
                display={{ base: "block", md: "none" }}
                icon={<IoIosMenu />}
                variant="outline"
                colorScheme="teal"
                onClick={onOpen}
                aria-label="Open Menu"
            />

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <Link display="block" mb={4} onClick={onClose} textColor='#39A7FF' fontWeight='bold' fontSize='md'>Store</Link>
                        <Link display="block" mb={4} onClick={onClose} textColor='#39A7FF' fontWeight='bold' fontSize='md'>Discover</Link>
                        <Link display="block" mb={4} onClick={onClose} textColor='#39A7FF' fontWeight='bold' fontSize='md'>About</Link>
                        <Button backgroundColor="#87C4FF" textColor='#FFEED9' mb={4} w="100%">Sign Up</Button>
                        <Button backgroundColor="#87C4FF" textColor='#FFEED9' w="100%">Log in</Button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default Navbar;