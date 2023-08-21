import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, Grid, Input, Textarea, Image } from '@chakra-ui/react';
import axios from 'axios';

const CompanyMessage2 = () => {
  const [image2, setImage2] = useState('');
  const [previewImage2, setPreviewImage2] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null)

  const [heading2, setHeading2] = useState('');
  const [text2, setText2] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/get-companymessage2');
      const data = response.data
      setImage2(`data:image/jpeg;base64,${data.data.companyMsgImage2}`);
      setHeading2(data.data.heading2);
      setText2(data.data.text2);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(event.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage2(e.target.result);
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
          formData.append('companyMsgImage2', selectedFile);
      }
      formData.append('heading2', heading2);
      formData.append('text2', text2);

      const response = await axios.post('http://localhost:8000/edit-homepage/companyMessage2', formData);
      if (response) {
        window.location.reload();
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
              <Image maxH={"300px"} src={previewImage2 || image2} alt="Click to Upload" onClick={() => document.getElementById('fileInput').click()} />
              <input type="file" id="fileInput" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
              <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center" color="white" fontSize="24px" fontWeight="bold" opacity={0} transition="opacity 0.3s ease" _hover={{ opacity: 1, brightness: 0.7 }}>
                Edit Image
              </Box>
            </Box>
          </Box>
          <Box>
            <FormControl id="heading2" mt={4}>
              <Input textAlign={'center'} value={heading2} onChange={(e) => setHeading2(e.target.value)} />
            </FormControl>
            <FormControl id="text2" mt={4}>
              <Textarea minH={"250px"} value={text2} onChange={(e) => setText2(e.target.value)} />
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

export default CompanyMessage2;