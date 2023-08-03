import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Heading } from '@chakra-ui/react'

export default function HeroWithBgButton() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      h={400}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'4xl'} align={'flex-start'} spacing={6}>
        <Heading
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                pt={2}
                color={'gray.100'}
            >
                Sky Way Nepal{' '}
                <Text as={'span'} color={'blue.300'}>
                    at a glance
                </Text>
            </Heading>
          <Stack direction={'row'}>
          <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              View Jobs
            </Button>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Apply
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}


            // <Heading
            //     fontWeight={600}
            //     fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            //     pt={2}
            // >
            //     Sky Way Nepal{' '}
            //     <Text as={'span'} color={'blue.400'}>
            //         at a glance
            //     </Text>
            // </Heading>
            // <Text color={'gray.500'} maxW={'3xl'}>
            //     Never miss a meeting. Never be late for one too. Keep track of your meetings and
            //     receive smart reminders in appropriate times. Read your smart “Daily Agenda”
            //     every morning.
            // </Text>