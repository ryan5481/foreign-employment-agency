import { Stepper, Step, StepIndicator, StepStatus, Box, useSteps, StepNumber, StepIcon, StepTitle, StepDescription, StepSeparator  } from "@chakra-ui/react"


const steps = [
    { title: 'Nineth', description: 'Contact Info' },
    { title: 'Tenth', description: 'Date & Time' },
  ]
  
  const Procedure5 = () => {
    const { activeStep } = useSteps({
      index: 6,
      count: steps.length,
    })
  

    return (
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  }

export default Procedure5
