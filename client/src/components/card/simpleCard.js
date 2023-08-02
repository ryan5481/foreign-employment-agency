
import { Image, Stack, Heading, Box, Divider, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const SimpleCard = (props) => {

    return (
        <>
            {props.categories.map((category, index) => {
                return (<>
                    
                            <Box
                             role={'group'}
                             p={2}
                             maxW={'330px'}
                             w={'full'}
                             h={200}
                             boxShadow={'2xl'}
                             rounded={'lg'}
                             pos={'relative'}
                             zIndex={1}>
                            <Box
                              rounded={'lg'}
                              pos={'relative'}
                              height={'230px'}
                              _after={{
                                  transition: 'all .1s ease',
                                  content: '""',
                                  w: 'full',
                                  h: '120px',
                                  pos: 'absolute',
                                  top: 5,
                                  left: 0,
                                  backgroundImage: `url(${category.imageUrl})`,
                                  filter: 'blur(13px)',
                                  zIndex: -1,
                              }}
                              _groupHover={{
                                  _after: {
                                      filter: 'blur(20px)',
                                  },
                              }}>
                                <Image
                                    src={category.imageUrl}
                                    alt={category.title}
                                    borderRadius='lg'
                                    h={120}
                                    objectFit="contain"
                                    width="100%"
                                    transition="0.15s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.1)',
                                    }}
                                />
                                <Stack mt='7' spacing='3'>
                                    <Heading size='sm'>{category.title}</Heading>
                                </Stack>
                            </Box>
                            </Box>
                       
                </>)
            })}
        </>
    )
}

export default SimpleCard