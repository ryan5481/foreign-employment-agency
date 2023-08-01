import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Grid
} from '@chakra-ui/react'

const IMAGE =
    "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"

const professions = [
    {
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
        sector: "Construction"
    },
    {
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
        sector: "Medical"
    },
    {
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
        sector: "Hotel management"
    },
    {
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
        sector: "Security"
    },
    {
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
        sector: "Crusie"
    },
    {
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
        sector: "Oil & Gas Refineries"
    },
    {
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
        sector: "Hospitality"
    },
    {
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
        sector: "Engineering"
    },
    {
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
        sector: "Aviation"
    },
]

export default function SimpleCard() {
    return (
        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                {professions.map((profession, id) => {
                    return (
                        <>
                            <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
                    gap={5}
                    rowGap={5}
                    pt={10}
                    p={10}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'space-between', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                                <Box
                                    rounded={'lg'}
                                    // mt={-12}
                                    pos={'relative'}
                                    height={'230px'}
                                    _after={{
                                        transition: 'all .3s ease',
                                        content: '""',
                                        w: 'full',
                                        h: 'full',
                                        pos: 'absolute',
                                        top: 5,
                                        left: 0,
                                        backgroundImage: `url(${profession.image})`,
                                        filter: 'blur(15px)',
                                        zIndex: -1,
                                    }}
                                    // _groupHover={{
                                    //     _after: {
                                    //         filter: 'blur(20px)',
                                    //     },
                                    // }}
                                    w='full' h='100%'>
                                    <Image
                                        rounded={'lg'}
                                        w='100%' h='200'
                                        objectFit={'cover'}
                                        src={profession.image}
                                        alt="#"
                                    />
                                </Box>

                                
                                    {/* <Heading fontWeight={800} fontSize={'xl'} align={'center'}>
                                        {profession.sector}
                                    </Heading> */}
                                    {/* <Text textDecoration={'line-through'} color={'gray.600'}>  $199 </Text> */}
                                    {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>  Brand  </Text> */}
                                    {/* <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}> Nice Chair, pink </Heading> */}
                            </Grid>
                        </>)
                })}
            </Box>

        </Center>
    )
}