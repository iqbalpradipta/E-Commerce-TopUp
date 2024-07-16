import { Box, Grid, GridItem, Button, Image, Text, VStack } from "@chakra-ui/react";

function Category() {
  return (
    <>
      <Box w="90vw" bgColor="#39A7FF" position='absolute' ml="auto" mr="auto" left='0' right='0' bottom='-80px' borderRadius='15px'>
        <Text textAlign='center' fontSize='xl' textColor='#FFEED9' fontWeight='bold'>Category</Text>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Button w='100px' h='100px' ml='auto' mr='auto' mt='10px' bgColor='#39A7FF'>
            <VStack>
                <Image src='https://cdn-icons-png.flaticon.com/256/4703/4703650.png' alt="PC Game" />
                <Text>PC Game</Text>
            </VStack>
          </Button>
          <Button w='100px' h='100px' ml='auto' mr='auto' mt='10px' bgColor='#39A7FF'>
            <VStack>
                <Image src='https://cdn-icons-png.flaticon.com/512/4519/4519179.png' alt="Mobile Game" />
                <Text fontSize='xs'>Mobile Game</Text>
            </VStack>
          </Button>
          <Button w='100px' h='100px' ml='auto' mr='auto' mt='10px' bgColor='#39A7FF'>
            <VStack>
                <Image src='https://cdn-icons-png.flaticon.com/512/5167/5167008.png' alt="E-Wallet" />
                <Text>E-Wallet</Text>
            </VStack>
          </Button>
          <Button w='100px' h='100px' ml='auto' mr='auto' mt='10px' bgColor='#39A7FF'>
            <VStack>
                <Image sx={{boxSize: '80px'}} src='https://cdn-icons-png.flaticon.com/512/6350/6350856.png' alt="Voucher Game" />
                <Text fontSize='xs'>Voucher Game</Text>
            </VStack>
          </Button>
          <Button w='100px' h='100px' ml='auto' mr='auto' mt='10px' bgColor='#39A7FF'>
            <VStack>
                <Image src='https://cdn-icons-png.freepik.com/512/3163/3163260.png' alt="Isi Pulsa" />
                <Text>Isi Pulsa</Text>
            </VStack>
          </Button>
          
        </Grid>
      </Box>
    </>
  );
}

export default Category;
