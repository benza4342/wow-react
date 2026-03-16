import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Flex,
  Link,
  Circle,
  VStack,
  HStack
} from '@chakra-ui/react'
import { ColorModeButton } from './components/ui/color-mode'

function App() {
  const [apiMessage, setApiMessage] = useState<string>("Loading from backend...")

  useEffect(() => {
    const apiUrl = import.meta.env.DEV ? 'https://localhost:8080/api/hello' : 'https://wow-react-eight.vercel.app/api/hello'

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setApiMessage(data.message))
      .catch(err => setApiMessage("Failed to fetch: " + err.message))
  }, [])

  return (
    <Box minH="100vh" bg="bg.canvas" color="fg">
      {/* Navigation */}
      <Box
        as="nav"
        position="fixed"
        w="full"
        zIndex="sticky"
        bg="bg.panel/80"
        backdropFilter="blur(10px)"
        borderBottomWidth="1px"
        py="4"
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading size="md" fontWeight="black" letterSpacing="tighter">
              CHAKRA<Text as="span" color="blue.500">V3</Text>
            </Heading>
            <HStack spaceX="8" display={{ base: 'none', md: 'flex' }}>
              <Link href="#features" fontWeight="medium">Features</Link>
              <Link href="#about" fontWeight="medium">About</Link>
              <Link href="#pricing" fontWeight="medium">Pricing</Link>
            </HStack>
            <HStack spaceX="4">
              <ColorModeButton />
              <Button colorScheme="blue" rounded="full" px="6" display={{ base: 'none', sm: 'flex' }}>
                Get Started
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box pt="32" pb="20" position="relative" overflow="hidden">
        <Container maxW="container.lg" textAlign="center">
          <Stack spaceY="8" align="center">
            <Box
              px="4"
              py="1"
              rounded="full"
              bg="blue.500/10"
              borderWidth="1px"
              borderColor="blue.500/20"
              color="blue.500"
              fontSize="sm"
              fontWeight="bold"
            >
              ✨ Now Powered by Chakra UI v3
            </Box>
            <Heading size="4xl" fontWeight="extrabold" letterSpacing="tight" lineHeight="shorter">
              Build Beautiful Apps <br />
              <Text as="span" bgGradient="to-r" gradientFrom="blue.400" gradientTo="purple.500" bgClip="text">
                Faster Than Ever
              </Text>
            </Heading>
            <Text fontSize="xl" color="fg.muted" maxW="2xl">
              Chakra UI provides a set of accessible, reusable, and composable React components that make it easy to create websites and apps.
            </Text>
            <HStack spaceX="4">
              <Button size="lg" colorScheme="blue" rounded="full" px="8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" rounded="full" px="8">
                View Documentation
              </Button>
            </HStack>

            {/* Backend Response Badge */}
            <Box
              mt="10"
              p="6"
              bg="bg.panel"
              rounded="2xl"
              shadow="xl"
              borderWidth="1px"
              maxW="md"
              w="full"
            >
              <Text fontSize="xs" fontWeight="bold" color="fg.muted" textTransform="uppercase" mb="2">
                Backend Status
              </Text>
              <Text fontSize="lg" fontWeight="semibold">
                {apiMessage}
              </Text>
            </Box>
          </Stack>
        </Container>

        {/* Decorative Background */}
        <Box
          position="absolute"
          top="-10%"
          left="50%"
          transform="translateX(-50%)"
          w="1000px"
          h="500px"
          bgGradient="radial(blue.500/10, transparent 70%)"
          filter="blur(80px)"
          zIndex="-1"
        />
      </Box>

      {/* Features Grid */}
      <Box bg="bg.muted" py="20" id="features">
        <Container maxW="container.xl">
          <VStack spaceY="12">
            <VStack spaceY="4" textAlign="center">
              <Heading size="2xl">Everything You Need</Heading>
              <Text fontSize="lg" color="fg.muted">
                Dozens of hand-crafted components to build your next big idea.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spaceX="8" spaceY="8" w="full">
              {[
                { title: 'Responsive', icon: '📱', desc: 'Optimized for all screen sizes from mobile to desktop.' },
                { title: 'Themeable', icon: '🎨', desc: 'Fully customizable design system with built-in dark mode.' },
                { title: 'Accessible', icon: '♿', desc: 'WAI-ARIA compliant components for a better user experience.' }
              ].map((feature, i) => (
                <Box
                  key={i}
                  p="8"
                  bg="bg.panel"
                  rounded="3xl"
                  shadow="sm"
                  borderWidth="1px"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-8px)', shadow: 'md', borderColor: 'blue.500' }}
                >
                  <Circle size="12" bg="blue.500/10" mb="6" fontSize="2xl">
                    {feature.icon}
                  </Circle>
                  <Heading size="lg" mb="4">{feature.title}</Heading>
                  <Text color="fg.muted">{feature.desc}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box py="10" borderTopWidth="1px">
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap="6">
            <Heading size="sm" fontWeight="black">
              CHAKRA<Text as="span" color="blue.500">V3</Text>
            </Heading>
            <Text color="fg.muted" fontSize="sm">
              © {new Date().getFullYear()} Chakra V3 Demo. Built with speed and love.
            </Text>
            <HStack spaceX="6">
              <Link color="fg.muted" _hover={{ color: 'blue.500' }}>Twitter</Link>
              <Link color="fg.muted" _hover={{ color: 'blue.500' }}>GitHub</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default App
