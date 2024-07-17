import { Box, Grid, Button, Image, Text, VStack } from "@chakra-ui/react";

function Category() {
  return (
    <Box 
      w="80%"
      h='28vh' 
      bgColor="#39A7FF" 
      position='relative' 
      ml="auto" 
      mr="auto" 
      left='0' 
      right='0'
      mt='-60px'
      borderRadius='15px'
      border='1px solid #FFEED9'
      boxShadow="1px -3px 29px -12px rgba(0,0,0,0.75)"
    >
      <Text 
        textAlign='center' 
        fontSize='xl' 
        textColor='black' 
        fontWeight='bold'
      >
        Category
      </Text>
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
  );
}

export default Category;
