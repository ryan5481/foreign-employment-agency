
import { Image, Stack, Input, Box, Divider, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter, FormControl } from '@chakra-ui/react'
import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"

const JobSectors = (props) => {
    const [sectorsData, setSectorsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedSectorId, setSelectedSectorId] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const [sectorTitles, setSectorTitles] = useState('');
    const imageInputRef = useRef();


    // FETCH DATA FROM THE BACKEND FOR DISPLAY
    const fetchWorkSectors = async () => {
        try {
            const res = await axios.get('http://localhost:8000/get-worksectors');
            const newData = await res.data.data
            setSectorsData(newData)
            const initialSectorTitles = newData.map(sector => sector.sectorTitle || '')
            setSectorTitles(initialSectorTitles)
            console.log(sectorsData)
            // setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            // setLoading(false);
        }
    };

    // UPDATE JOB SECTOR TITLE
    const handleTitleSubmit = async(sectorId, index) => {
        if(!sectorId) {
            console.error("No sectorId provided.")
            return
        }
        const updatedTitle = sectorTitles[index]
        const formData = new FormData();
        formData.append('_id', sectorId);
        formData.append('sectorTitle', updatedTitle);
        try {
            await axios.put('http://localhost:8000/edit-homepage/worksectors', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            fetchWorkSectors();
        } catch (error) {
            console.error('Error updating title:', error);
        }
    }
    
    const handleImageSelect = (event) => {
        setSelectedImageFile(event.target.files[0])
        
    }
    
    const handleImageReplace = async (sectorId) => {
        if (selectedImageFile) {
            const formData = new FormData()
            formData.append("sectorImage", selectedImageFile)
            formData.append("_id", sectorId)
            try {
                await axios.put("http://localhost:8000/edit-homepage/worksectors", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                fetchWorkSectors();
                setSelectedImageFile(null);
                setSelectedSectorId(null);
            } catch (error) {

                console.error("Error updating image: ", error)
            }
        }
    }


    useEffect(() => {
        fetchWorkSectors();
    }, [])


    return (
        <>
            
                {sectorsData.map((sector, index) => {
                    return (<>
                    <form onSubmit={handleTitleSubmit}>
                        <Box
                            key={sector._id}
                            role={'group'}
                            p={2}
                            maxW={'330px'}
                            w={'full'}
                            minH="300"
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
                                    filter: 'blur(13px)',
                                    zIndex: -1,
                                }}
                                _groupHover={{
                                    _after: {
                                        filter: 'blur(20px)',
                                    },
                                }}>
                                <Image
                                    src={`data:image/jpeg;base64,${sector.sectorImage}`}
                                    alt={sector.sectorTitle}
                                    borderRadius='lg'
                                    h={120}
                                    objectFit="contain"
                                    width="100%"
                                    transition="0.15s ease-in-out"
                                    _hover={{
                                        brightness: '0.8',
                                    }}
                                    onClick={() => imageInputRef.current.click()}
                                />
                               
                                <input
                                    type='file'
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    ref={imageInputRef}
                                    onChange={handleImageSelect}
                                />
                                <Button
                                    mt="2"
                                    onClick={() => handleImageReplace(sector._id)}
                                >Update Image</Button>

                                <FormControl mt='7' spacing='3' id='sectorTitle'>
                                    <Input 
                                    size='sm' 
                                    rounded="10px" 
                                    color='gray.100'
                                    fontWeight="bold" 
                                    fontSize="18px" 
                                    value={sectorTitles[index]} 
                                    onChange={(e) => {
                                        const updatedTitles = [...sectorTitles]
                                        updatedTitles[index] = e.target.value
                                        setSectorTitles(updatedTitles)
                                    }}
                                    ></Input>
                                </FormControl>
                                <Stack>
                                    <Button
                                        mt="2"
                                        maxW="200"
                                        type='submit'
                                        onClick={() => handleTitleSubmit(sector._id, index)}
                                    >Update Title</Button>
                                </Stack>
                            </Box>
                        </Box>
                        </form>
                    </>)
                })}
            
        </>
    )
}

export default JobSectors