import { Flex, Box, Heading, Spacer, ButtonGroup, Button, Link, Input, InputGroup, InputRightElement, useMediaQuery } from "@chakra-ui/react";
import { IoIosSearch, IoMdCart } from "react-icons/io";

function Navbar() {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
    return (
        <>
        <Flex color='white' backgroundColor="#39A7FF" minWidth="max-content" alignItems="center" gap="2" flexWrap="wrap">

            <Box p="2">
                <Heading size="md" textColor='#FFEED9' fontWeight='bold' fontSize='2xl'>Ikebal TopUp</Heading>
            </Box>

            {isLargerThan768 && (
                <Box p="2" mt='1'>
                    <Link size="md" pe="5" textColor='#FFEED9' fontWeight='bold' fontSize='md'>Store</Link>
                    <Link size="md" pe="5" textColor='#FFEED9' fontWeight='bold' fontSize='md'>Discover</Link>
                    <Link size="md" pe="5" textColor='#FFEED9' fontWeight='bold' fontSize='md'>About</Link>
                </Box>
            )}

            <Spacer />

            <Box p="2" mt='1' flex="1">
                <InputGroup>
                    <InputRightElement pointerEvents='none'>
                        <IoIosSearch color='gray.300' />
                    </InputRightElement>
                    <Input variant='outline' bgColor='white' w={isLargerThan768 ? '500px' : '100%'}  placeholder='Search...' size='md' />
                </InputGroup>
            </Box>

            <Box>
                <Link>
                    <IoMdCart size='23px' />
                </Link>
            </Box>    

            <Spacer />

            <ButtonGroup gap="2" p='5px'>
                <Button backgroundColor="#87C4FF" textColor='#FFEED9'>Sign Up</Button>
                <Button backgroundColor="#87C4FF" textColor='#FFEED9'>Log in</Button>
            </ButtonGroup>

        </Flex>
        </>
    );
}

export default Navbar;
