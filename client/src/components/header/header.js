
import {
  Box,
  Center,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook, FaFacebookMessenger } from 'react-icons/fa'
import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const Header = () => {
  return (
    <Box className='header'
      bg={'gray.900'}
      color={useColorModeValue('gray.200', 'gray.50')}
      h={50}
      w="full"
      fontSize={"sm"}
    >
      <Container
        as={Stack}
        maxW={'full'}
        py={2}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>Regd.No. : 66236/066/067</Text>
        <Stack direction={'row'} spacing={6}>
          <Center>
            <Text>  © Lic. No.: 0123456789</Text>
          </Center>
          <Center>
            <Text> recruit@skywaynepal.com</Text>
          </Center>
          <Center>
            <Text>+977-123456788</Text>
          </Center>
          <SocialButton label={'Whatsapp'} href={'#'}>
            <FaWhatsapp />
          </SocialButton>
          <SocialButton label={'Facebook'} href={'#'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'Messanger'} href={'#'}>
            <FaFacebookMessenger />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default Header