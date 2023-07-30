import { Image, Stack, Heading, Text, Divider, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const CategoryCard = () => {

    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                    </Stack>
                </CardBody>
                {/* <Divider /> */}
                <CardFooter alignContent={'middle'} align="center">
                    <ButtonGroup spacing='3' >
                        <Button variant='ghost' colorScheme='blue'>
                            Details
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            Apply now
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )

}

export default CategoryCard