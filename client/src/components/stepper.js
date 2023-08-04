import { Stepper, Step, Flex, Text, StepIndicator, StepStatus, Box, useSteps, Grid, StepNumber, StepIcon, StepTitle, StepDescription, StepSeparator, Heading, Center } from "@chakra-ui/react"
import { CheckCircleIcon } from '@chakra-ui/icons'
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowDown } from 'react-icons/hi';



const steps = [
  { title: 'First', description: 'Receive Demand' },
  { title: 'Second', description: 'Allpication Acceptance' },
  { title: 'Third', description: 'Pre-Screening' },
  { title: 'Fourth', description: 'Candidate Interview' },
  { title: 'Fifth', description: 'Selection of Candidates' },
  { title: 'Sixth', description: 'Offer Letter' },
  { title: 'Seventh', description: 'Medical Documantation' },
  { title: 'Eighth', description: 'Visa Arrival' },
  { title: 'Nineth', description: 'Labor Clearance' },
  { title: 'Tenth', description: 'Pre-Boarding' },
  { title: 'Eleventh', description: 'Deployment to Overseas' },
  { title: 'Twelveth', description: 'Feedback Retrival' },
]

const Procedure1 = () => {


  return (
    <Box alignItems={'center'} px={10} pb={{ sm: '2', md: '7', lg: '10' }}>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1r', lg: '1fr 1fr 1fr 1fr 1fr 1fr' }} gap px={{ sm: '2', md: '10', lg: '15' }} alignContent='center' align='center' rowGap={20} maxW={'95%'}> 
        {steps.map((item, index) => {
          return (<>
            <Box >
              <CheckCircleIcon color={'green.400'} boxSize={10} />
              <Text fontSize={'2xl'} textAlign='center' fontWeight={'bold'} >
                {item.title}
              </Text>
              <Text fontSize={'xl'} textAlign='center' >
                {item.description}
                
              </Text>
              </Box>
              
            </>)
        })} 
          </Grid > 
    </Box>
  )
}

export default Procedure1

