
import { Image, Stack, Heading, Grid, Divider, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const CategoryCard = (props) => {

    return (
        <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr'}} p={10} gap={10}>
            
                {props.jobsList.map((job, index)=> {
                    return(<>
                <Card maxW='sm'>
                <CardBody w='100%' h='10' bg='blue.500' >
                    <Image
                        src={job.src}
                        alt={job.alt}
                        borderRadius='lg'

                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{job.alt}</Heading>
                    </Stack>
                </CardBody>
                <Divider />
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
                </>)
            })}
            
            
        </Grid>
    )

}

export default CategoryCard