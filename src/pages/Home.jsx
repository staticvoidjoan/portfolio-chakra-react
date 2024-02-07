import {
  Box,
  Image,
  Text,
  Flex,
  Code,
  HStack,
  VStack,
  Avatar,
  Heading,
  Highlight,
  Container,
  Button,
  SimpleGrid,
  useMediaQuery
} from "@chakra-ui/react";
import Transition from "../Transition";
import { Link } from "react-router-dom";
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import youtube from "../assets/youtube.png";
import React from "react";
import joan from "../assets/joan.jpeg";
import pfp from "../assets/pfp.jpeg";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";
import careerCrush from "../assets/careerCrush.png";
export default function Home() {
  const MotionVStack = motion(VStack);
  const [isSmallerThan768] = useMediaQuery("(max-width:768px)");
  return (
    <Transition>
      <Box
        bg="blackBrand.100"
        w="100%"
        p={4}
        as="main"
        h="100%"
        color="white"
        overflow={"auto"}
      >
        <Flex
          p={5}
          mt={10}
          justifyContent="center"
          alignItems={"center"}
          gap={5}
          flexDir={"column"}
        >
          <Image src={joan} boxSize="350px" />
          <Container alignSelf={"center"}>
            <Flex
              bg="blackBrand.400"
              h="50px"
              borderRadius={"15px"}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap="nowrap" // Prevent text from wrapping
              overflow="hidden" // Hide overflow content
              flexDir={"row"}
              overflowWrap={"nowrap"}
            >
              <Text
                p={4}
                overflow={"hidden"}
                overflowWrap={"nowrap"}
                wrap="nowrap"
                fontSize={isSmallerThan768 ? "0.8rem" : ""} 
              >
                Hello, I'm a developer based in Albania!
              </Text>
            </Flex>
          </Container>
          <HStack gap={10}>
            <VStack textAlign="left" align={"left"}>
              <Heading size="lg">Joan Shameti</Heading>
              <Text fontSize={isSmallerThan768 && "12px"}>Digital Craftsman (Developer/Designer/Gamer)</Text>
            </VStack>
            <Avatar src={pfp} size="xl" border="2px solid white"></Avatar>
          </HStack>
          <Container>
            <VStack alignItems={"flex-start"}>
              <Heading size="lg" borderBottom={"5px solid #313134"}>
                Work
              </Heading>
              <Text>
                <Highlight
                  query={["Career Crush", "Tegeria"]}
                  styles={{ px: "2", py: "1", rounded: "full", bg: "pink.300" }}
                >
                  Joan is a passionate junior software engineer based in
                  Albania. With a deep love for gaming, programming, and
                  technology, Joan has embraced the world of software
                  development with enthusiasm. Beyond the routine of coding,
                  Joan has successfully developed a unique application named
                  'Career Crush.' This innovative app revolutionizes the job
                  search experience, taking inspiration from the popular dating
                  app Tinder.Currently employed at Tegeria, Joan brings
                  dedication and skill to the team, contributing to the
                  development of cutting-edge solutions
                </Highlight>
              </Text>
            </VStack>
          </Container>
          <Button colorScheme="teal" as={Link} to={"/career"} gap={2}>
            My Portfolio
            <ChevronRightIcon />
          </Button>
          <Container>
            <VStack alignItems={"flex-start"}>
              <HStack borderBottom={"5px solid #313134"} alignItems={"center"}>
                <Heading size="sm" mb={0}>
                  I
                </Heading>
                <FaHeart />
              </HStack>
              <Text align={"left"}>
                <Highlight
                  align="left"
                  query={["Programming", "Gaming"]}
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    color: "pink.300",
                  }}
                >
                  Programming, Art, Music, Gaming, Technology, Cloud
                  Development, Anime
                </Highlight>
              </Text>
            </VStack>
          </Container>
          <Container mt="10px">
            <VStack alignItems={"flex-start"}>
              <Heading size="md" borderBottom={"5px solid #313134"}>
                On The Web
              </Heading>
              <Button
                colorScheme="teal"
                variant="ghost"
                gap={2}
                as={Link}
                to={"https://github.com/staticvoidjoan?tab=repositories"}
                target="_blank"
              >
                <FaGithub />
                @staticvoidjoan
              </Button>
              <Button
                colorScheme="teal"
                variant="ghost"
                gap={2}
                as={Link}
                to={"https://www.linkedin.com/in/joan-shameti-536637160/"}
                target="_blank"
              >
                <FaLinkedin />
                @joan.shameti
              </Button>
              <Button
                colorScheme="teal"
                variant="ghost"
                gap={2}
                as={Link}
                to={"https://twitter.com/m00nwhiskey"}
                target="_blank"
              >
                <FaTwitter />
                @m00nwhiskey
              </Button>
              <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <MotionVStack
                  as={Link}
                  to={"https://www.youtube.com/@snowe4503/videos"}
                  target="_blank"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image src={youtube} />

                  <Text align={"center"}>
                    <i>snowe</i>
                    <br />
                    Gaming Youtube Channel
                  </Text>
                </MotionVStack>
                <MotionVStack
                  as={Link}
                  to={"https://career-crush.com"}
                  target="_blank"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image src={careerCrush} width={"50%"} />

                  <Text align={"center"}>
                    <i>CareerCrush</i>
                    <br />
                    Job Matching Application
                  </Text>
                </MotionVStack>
              </SimpleGrid>
            </VStack>
          </Container>
          <Container>
            <VStack alignItems={"flex-start"}>
              <Heading size="lg" borderBottom={"5px solid #313134"}>
                Newsletter
              </Heading>
              <Text>
                Join me on a behind-the-scenes coding journey. Weekly updates on
                projects, tutorials, and videos
              </Text>
              <Button colorScheme="teal" gap={2} alignSelf={"center"} mt={5}>
                <EmailIcon />
                Sign up here
              </Button>
            </VStack>
          </Container>
          <Footer />
        </Flex>
      </Box>
    </Transition>
  );
}
