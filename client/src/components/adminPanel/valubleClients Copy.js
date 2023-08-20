import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, Grid, Input, Textarea, Image } from '@chakra-ui/react';
import axios from 'axios';

const CompanyMessage1 = () => {
  const [previewImage, setPreviewImage] = useState();
  const [selectedFile, setSelectedFile] = useState()

  const [image1, setImage1] = useState();
  const [heading1, setHeading1] = useState();
  const [text1, setText1] = useState();
  const [description1, setDescription1] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/get-valuableclients');
      const data = response.data.data
      setImage1(`data:image/jpeg;base64,${data.valuableClientsImage1}`);
      setHeading1(data.heading1);
      setText1(data.text1);
      setDescription1(data.description1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    alert(alert())

    setSelectedFile(event.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
      try {
        const formData = new FormData();
        if(selectedFile){
            formData.append('valuableClientsImage1', selectedFile);
        }
        formData.append('heading1', heading1);
        formData.append('text1', text1);
        formData.append('description1', description1);

        const res = await axios.post('http://localhost:8000/edit-homepage/valuableclients', formData);
        if (res) {
        //   window.location.reload();
        }
      } catch (error) {
        console.error('Error updating data:', error);
      }
  };

  return (
    <Box p={4} maxW="full" m="auto">
      <form onSubmit={handleSubmit}>
        <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr' }} gap={10} px={{ sm: '2', md: '10', lg: '15' }} alignContent='center' align='center' maxW={'95%'}>
        
          <Box p={5} display="flex" flexDirection="column" alignItems="center">
            <Box position="relative" cursor="pointer" p={1} _hover={{ '& img': { filter: 'brightness(0.6)' } }}>
              <Image maxH={"300px"} 
              src={previewImage || image1} 
              alt="Click to Upload" 
              onClick={() => document.getElementById('fileInput').click()} 
              />
              <input type="file" 
              id="fileInput" 
              accept="image/*" 
              onChange={handleFileChange} 
              style={{ display: 'none' }} />
              <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center" color="white" fontSize="24px" fontWeight="bold" opacity={0} transition="opacity 0.3s ease" _hover={{ opacity: 1, brightness: 0.7 }}>
                Edit Image
              </Box>
            </Box>
          </Box>
          <Box>
            <FormControl id="heading1" mt={4}>
              <Input textAlign={'center'} 
              value={heading1} 
              onChange={(e) => setHeading1(e.target.value)} />
            </FormControl>
            <FormControl id="text1" mt={4}>
              <Input textAlign={'center'} 
              value={text1} 
              onChange={(e) => setText1(e.target.value)} />
            </FormControl>
            <FormControl 
            id="text1" 
            mt={4}>
              <Textarea minH={"250px"} 
              value={text1} 
              onChange={(e) => setText1(e.target.value)} />
            </FormControl>
          </Box>
        </Grid>
        <Button type="submit" mt={4} colorScheme="teal">
          Update Data
        </Button>
      </form>
    </Box>
  );
};

export default CompanyMessage1;
