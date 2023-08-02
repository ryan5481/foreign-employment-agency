import {
    Box,
    Heading,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,
} from '@chakra-ui/react'

// interface IBlogTags {
//   tags: Array<string>,
//   marginTop?: SpaceProps['marginTop']
// }

// interface Props {
//   marginTop?: number,
//   tags: any[]
// }

// const BlogTags = (props: Props) => {
//   const { marginTop = 0, tags } = props

//   return (
//     <HStack spacing={2} marginTop={marginTop}>
//       {tags.map((tag) => {
//         return (
//           <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
//             {tag}
//           </Tag>
//         )
//       })}
//     </HStack>
//   )
// }

// interface BlogAuthorProps {
//   date: Date,
//   name: string
// }

// const BlogAuthor = (props: BlogAuthorProps) => {
//   return (
//     <HStack marginTop="2" spacing="2" display="flex" alignItems="center" align={"center">
//       {/* <Image
//         borderRadius="full"
//         boxSize="40px"
//         src="https://100k-faces.glitch.me/random-image"
//         alt={`Avatar of ${props.name}`}
//       /> */}
//       <Text fontWeight="medium">{props.name}</Text>
//       {/* <Text>—</Text> */}
//       {/* <Text>{props.date.toLocaleDateString()}</Text> */}
//     </HStack>
//   )
// }

const BlogArticleCard = () => {
    return (
        <Container maxW={'7xl'} p="12">
            <Heading as="h1">Our Valuable Clients</Heading>
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Box borderRadius="lg" overflow="hidden">
                            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image
                                    borderRadius="lg"
                                    src={
                                        "https://skywaynepal.com/static/media/Qatar.0fcc35e00f31f7f1b9fd.jpeg"
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                    width="100%"
                                    transition="0.3s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.05)',
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(orange.600 1px, transparent 1px)',
                                'radial(orange.300 1px, transparent 1px)',
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}>

                    <Heading marginTop="1">
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            Qatar Armed Force - Catering Department
                        </Text>
                    </Heading>
                    <Text
                        color={useColorModeValue('gray.500', 'gray.400')}
                        fontSize={'2xl'}
                        fontWeight={'300'}>
                        Qatar Government Project
                    </Text>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg">
                        We Skyway Management Pvt. Ltd. are very pleased and grateful to work for the very first time in Nepal with the Qatar government Project (Qatar Armed Force - Catering Department). This was the first project from Nepal with the highest Salary scale of the Catering Department and It was very successful, both Client and Candidates were happy with our services and fulfilled their contract period happily. Now we are seeking more opportunities to work with them further.
                    </Text>
                    {/* <BlogAuthor name="Qatar Government Project"
        //    date={new Date('2021-04-06T19:01:27Z')} 
           /> */}
                </Box>
            </Box>

        </Container>
    )
}

export default BlogArticleCard