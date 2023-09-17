import React, {useEffect, useState} from "react";
import { Stepper, Step, Flex, Text, StepIndicator, StepStatus, Box, useSteps, Grid, StepNumber, StepIcon, StepTitle, StepDescription, StepSeparator, Heading, Center } from "@chakra-ui/react"
import { CheckCircleIcon } from '@chakra-ui/icons'
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowDown } from 'react-icons/hi';
import axios from "axios"
const baseUrl = process.env.REACT_APP_BASE_URL

const Procedure1 = () => {
  const [stepperData, setStepperData] = useState([])

  const fetchStepperData  = async() => {
    try{
      const res = await axios.get(`${baseUrl}/get-procedure`)
      if(res){
        setStepperData(res.data.data)
      }
    }catch(error){
      console.error("Error: ", error)
    }
  }

  const stepNumberToWord = (number) => {
    const words = [
      "First",
      "Second",
      "Third",
      "Fourth",
      "Fifth",
      "Sixth",
      "Seventh",
      "Eighth",
      "Ninth",
      "Tenth",
      "Eleventh",
      "Twelfth",
      "Thirteenth",
      "Fourteenth",
      "Fifteenth",
      "Sixteenth",
      "Seventeenth",
      "Eighteenth",
    ];
    return words[number - 1] || "";
  };

  useEffect(() => {
    fetchStepperData()
  }, [])

  return (
    <Box alignItems={'center'} px={10} pb={{ sm: '2', md: '7', lg: '10' }}>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1r', lg: '1fr 1fr 1fr 1fr 1fr 1fr' }} gap px={{ sm: '2', md: '10', lg: '15' }} alignContent='center' align='center' rowGap={20} maxW={'95%'}> 
        {stepperData.map((item, index) => {
          return (<>
            <Box >
              <CheckCircleIcon color={'green.400'} boxSize={10} />
              <Text fontSize={'2xl'} textAlign='center' fontWeight={'bold'} >
              {stepNumberToWord(index + 1)}
              </Text>
              <Text fontSize={'xl'} textAlign='center' >
                {item.procedureText}
                
              </Text>
              </Box>
              
            </>)
        })} 
          </Grid > 
    </Box>
  )
}

export default Procedure1

