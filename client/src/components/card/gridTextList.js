import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Spacer,
    useColorModeValue
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Replace test data with your own
const features = [
    {
        title: 'Consult',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
    },
    {
        title: 'Identify',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
    },
    {
        title: 'Discuss',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
    },
    {
        title: 'Onboard',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
    },
    {
        title: 'Minimise Risk',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
    },


]

export default function GridTextList() {
    return (
        <Box p={4} color={useColorModeValue('blue.700', 'gray.400')}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>Why Trust Skyway Nepal</Heading>
                <Text color={useColorModeValue('blue.600', 'gray.400')} fontSize={'xl'}>
                    With decades of experience in providing offshore employments and visas in entire Middle east and other countries, our professionals understand your jobs needs and prepare you accordingly.
                </Text>
            </Stack>
            <Spacer/>
            <br/>
            <Box p={15}>
                <Text color={useColorModeValue('blue.700', 'gray.400')} fontSize={'xl'}>
                    Sky Way Management, A last resort of Manpower requirement to its clients, has started its service since 2013 then continuously supplies the manpower pertaining Blue to White Colors Workers in the Middle East and Malaysia. It has a team of competent, Talents who have worked in the sectors for decades. Team of Talents goes deep down through the requirements received by its value clients and always focuses for the best output meeting the target in one –go to save the time and effort of both the parties for fair and successful recruitment. We always value ethics and professionalism at the top. decades of experience in providing offshore employments and visas in entire Middle east and other countries, our professionals understand your jobs needs and prepare you accordingly.
                </Text>
            </Box>

            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} color={useColorModeValue('blue.700', 'gray.400')} pb={5}>
                    {features.map((feature) => (
                        <HStack key={feature.id} align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{feature.title}</Text>
                                <Text  align={'left'}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}