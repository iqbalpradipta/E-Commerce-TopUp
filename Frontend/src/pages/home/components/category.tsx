import { Box, Grid, Button, Image, Text, VStack } from "@chakra-ui/react";

function Category() {
  return (
    <Box 
      w={["90%", "80%", "70%", "60%"]}
      h='auto' 
      bgColor="#39A7FF" 
      position='relative' 
      ml="auto" 
      mr="auto" 
      left='0' 
      right='0'
      mt={["-30px", "-40px", "-50px", "-60px"]}
      borderRadius='15px'
      border='1px solid #FFEED9'
      boxShadow="1px -3px 29px -12px rgba(0,0,0,0.75)"
      p="20px"
    >
      <Text 
        textAlign='center' 
        fontSize={["lg", "xl", "2xl"]} 
        textColor='black' 
        fontWeight='bold'
        mb={4}
      >
        Category
      </Text>
      <Grid templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "repeat(5, 1fr)"]} gap={6}>
        {[
          { src: 'https://cdn-icons-png.flaticon.com/256/4703/4703650.png', alt: 'PC Game', text: 'PC Game' },
          { src: 'https://cdn-icons-png.flaticon.com/512/4519/4519179.png', alt: 'Mobile Game', text: 'Mobile Game' },
          { src: 'https://cdn-icons-png.flaticon.com/512/5167/5167008.png', alt: 'E-Wallet', text: 'E-Wallet' },
          { src: 'https://cdn-icons-png.flaticon.com/512/6350/6350856.png', alt: 'Voucher Game', text: 'Voucher Game' },
          { src: 'https://cdn-icons-png.freepik.com/512/3163/3163260.png', alt: 'Isi Pulsa', text: 'Isi Pulsa' },
        ].map((category, index) => (
          <Button key={index} w='100px' h='100px' mx='auto' mt='10px' bgColor='#39A7FF'>
            <VStack>
              <Image src={category.src} alt={category.alt} boxSize='60px' />
              <Text fontSize='xs'>{category.text}</Text>
            </VStack>
          </Button>
        ))}
      </Grid>
    </Box>
  );
}

export default Category;