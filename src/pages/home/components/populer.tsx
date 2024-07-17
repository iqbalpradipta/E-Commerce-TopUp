import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text, Image, Badge, Wrap, WrapItem } from "@chakra-ui/react";
import category from "../mocks/category.json";

function Populer() {
  return (
    <>
      <Box border='1px solid #FFEED9' boxShadow='4px 12px 29px -12px rgba(0,0,0,0.75)' bgColor='#87C4FF' ml="auto" mr="auto" w="90%" height="50%" mt="30px" borderRadius="lg">
        <Text textColor='black' fontSize='2xl' ms='20px' fontWeight='bold' p='10px'>🔥 Populer</Text>
        <Text textColor='#6c6869' as='sup' fontSize='sm' ms='20px' fontWeight='bold' p='10px'>Find your needed from Popular Games</Text>
        <Wrap spacing='10px' justify='center' p='15px'>
          {category.map((data, index) => (
            <WrapItem key={index} flexBasis={['100%', '45%', '22%']} maxW={['100%', '45%', '22%']} ms='10px'>
              <Card  boxShadow='1px -3px 29px -12px rgba(0,0,0,0.75)' w='100%' ml='auto' mr='auto' borderRadius="lg" border='1px solid #FFEED9'>
                <CardBody>
                  <Image
                    src={data.image}
                    alt={data.name}
                    borderRadius="lg"
                    boxSize='150px'
                    ml='auto'
                    mr='auto'
                  />
                  <Stack mt="6" spacing="3">
                    <Heading textAlign='center' size="md">{data.name}</Heading>
                    <Wrap justify='center' spacing='5px'>
                      {data.label.map((databadge, i) => (
                        <Badge key={i} variant='subtle' colorScheme={databadge.color} fontSize='xs' p='2px' m='2px'>
                          {databadge.name}
                        </Badge>
                      ))}
                    </Wrap>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter ml='auto' mr='auto'>
                  <ButtonGroup>
                    <Button variant='outline' colorScheme="blue">
                      Buy now
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </>
  );
}

export default Populer;
