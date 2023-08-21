
import { Image, Stack, Heading, Box, Divider, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter, AspectRatio } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios"
const SimpleCard = (props) => {

    const [sectorsData, setSectorsData] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchWorkSectors = async () => {
        try {
            const res = await axios.get('http://localhost:8000/get-worksectors');
            const newData = await res.data.data
            setSectorsData(newData)
            console.log(sectorsData)
            // setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            // setLoading(false);
        }
    };

    useEffect(() => {
        fetchWorkSectors();
    }, [])


    return (
        <>
            {sectorsData.map((sector, index) => {
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
                                  backgroundImage: `data:image/jpeg;base64,${sector.sectorImage}`,
                                  filter: 'blur(13px)',
                                  zIndex: -1,
                              }}
                              _groupHover={{
                                  _after: {
                                      filter: 'blur(20px)',
                                  },
                              }}>
                                <AspectRatio>
                                <Image
                                    src={`data:image/jpeg;base64,${sector.sectorImage}`}
                                    alt={sector.sectorTitle}
                                    borderRadius='lg'
                                    h={120}
                                    objectFit="contain"
                                    width="100%"
                                    transition="0.15s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.1)',
                                    }}
                                />
                                </AspectRatio>
                                <Stack mt='7' spacing='3'>
                                    <Heading size='sm'>{sector.sectorTitle}</Heading>
                                </Stack>
                            </Box>
                            </Box>
                       
                </>)
            })}
        </>
    )
}

export default SimpleCard