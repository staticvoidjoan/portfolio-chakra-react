import React from "react";
import {
  Box,
  Container,
  Flex,
  Highlight,
  Text,
  VStack,
  HStack,
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  SimpleGrid,
  Image,
  Grid,
  VisuallyHidden,
  useMediaQuery,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { BsGpuCard } from "react-icons/bs";
import gadgets from "../assets/gadgets.jpg";
import { FiCpu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineStorage } from "react-icons/md";
import { FaMemory } from "react-icons/fa";
import { GrFan } from "react-icons/gr";
import { ImPower } from "react-icons/im";
import { PiComputerTowerFill } from "react-icons/pi";

import PeripheralCard from "../components/PeripheralCard";
import PeripheralCardMobile from "../components/PeripheralCardMobile";
//Images
import mousepad from "../assets/mousepad.png";
import keyboard from "../assets/keyboard.jpg";
import mouse from "../assets/mouse.png";
import headphones from "../assets/headphones.jpg";

import monitor from "../assets/monitor.png";
import Footer from "../layout/Footer";
import Transition from "../Transition";
export default function Uses() {
  const [isSmallerThan768] = useMediaQuery("(max-width:768px)");
  const BrowserProducts = (
    <Box>
      <HStack gap={5} mb={5}>
        <PeripheralCard
          image={keyboard}
          title={"Keyboard"}
          description={"Razer BlackWidow V3 TKL"}
        />
        <PeripheralCard
          image={mouse}
          title={"Mouse"}
          description={"SteelSeries Sensei Ten"}
        />
      </HStack>
      <HStack gap={5} mb={5}>
        <PeripheralCard
          image={headphones}
          title={"Headset"}
          description={"Logitech G PRO X /w Blue Mic"}
        />
        <PeripheralCard
          image={mousepad}
          title={"Mouse Pad"}
          description={"SteelSeries QCK Edge XL"}
        />
      </HStack>
      <HStack mb={5}>
        <PeripheralCard
          image={monitor}
          title={"Monitor"}
          description={'Samsung 24"'}
        />

        <VisuallyHidden w={"400px"}>as</VisuallyHidden>
      </HStack>
    </Box>
  );

  const MobileProducts = (
    <Box>
      <VStack gap={5} mb={5}>
        <PeripheralCardMobile
          image={keyboard}
          title={"Keyboard"}
          description={"Razer BlackWidow V3 TKL"}
        />
        <PeripheralCardMobile
          image={mouse}
          title={"Mouse"}
          description={"SteelSeries Sensei Ten"}
        />
      </VStack>
      <VStack gap={5} mb={5}>
        <PeripheralCardMobile
          image={headphones}
          title={"Headset"}
          description={"Logitech G PRO X /w Blue Mic"}
        />
        <PeripheralCardMobile
          image={mousepad}
          title={"Mouse Pad"}
          description={"SteelSeries QCK Edge XL"}
        />
      </VStack>
      <VStack mb={5}>
        <PeripheralCardMobile
          image={monitor}
          title={"Monitor"}
          description={'Samsung 24"'}
        />
      </VStack>
    </Box>
  );

  return (
    <Transition key={isSmallerThan768}>
      <Box
        bg="blackBrand.100"
        w="100%"
        as="main"
        p={4}
        h="100%"
        color="white"
        overflow={"auto"}
      >
        <Flex
          p={5}
          mt={10}
          justify={"center"}
          flexDir={"column"}
          alignItems={"center"}
          backgroundImage={gadgets}
          w={"100%"}
          height={"350px"}
          backgroundSize={"cover"}
          backgroundPosition={"90%"}
        >
          <Text fontSize={"0.8rem"} textShadow="1px 1px 7px black">
            WELCOME TO
          </Text>
          <Text
            fontSize={isSmallerThan768 ? "1.5rem" : "2rem"}
            textShadow="0.5px 0.5px black"
          >
            <Highlight query={["use"]} styles={{ py: "1", color: "pink.300" }}>
              A curated list of the tech I use
            </Highlight>
          </Text>
        </Flex>
        <Flex
          as={"section"}
          p={5}
          justifyContent="center"
          alignItems={"center"}
          gap={5}
          flexDir={"column"}
        >
          <Flex justifyContent={"center"}>
            <Text width={isSmallerThan768 ? "100%" : "40%"}>
              As a developer, I've been spending hours and hours at my desk
              every day. So, I've been continuously improving my workspace in
              order to boost my productivity. Here is a living snapshot and a
              place to point curious developers to what I use.
              <Link
                to={"/"}
                style={{
                  color: "#F687B3",
                  whiteSpace: "nowrap", 
                  display: "flex", 
                  alignItems: "center", 
                }}
              >
                Learn more about me
                <ArrowForwardIcon />
              </Link>
            </Text>
          </Flex>
          <Container>
            <VStack alignItems={"flex-start"} overflow={"auto"}>
              <Heading size="lg" borderBottom={"5px solid #313134"}>
                Computer Specs
              </Heading>
              <List>
                <ListItem>
                  <ListIcon as={FiCpu} />
                  I5-10400F
                </ListItem>
                <ListItem>
                  <ListIcon as={GrFan} />
                  Be Quiet Pure Rock Slim 2
                </ListItem>
                <ListItem>
                  <ListIcon as={BsGpuCard} />
                  RTX 3060 12GB DDR5 VRAM
                </ListItem>
                <ListItem>
                  <ListIcon as={FaMemory} />
                  16GB DDR4 RAM
                </ListItem>
                <ListItem>
                  <ListIcon as={MdOutlineStorage} />
                  480GB SanDIsk SSD
                </ListItem>
                <ListItem>
                  <ListIcon as={MdOutlineStorage} />2 Terabyte Seagate 7200rpm
                  HDD
                </ListItem>
                <ListItem>
                  <ListIcon as={ImPower} />
                  Be Quiet! 650W System Power 10 PSU, 80+ Bronze
                </ListItem>
                <ListItem>
                  <ListIcon as={PiComputerTowerFill} />
                  XIGMATEK DUKE - RGB 6xFan Computer Case
                </ListItem>
              </List>
            </VStack>
          </Container>
          <Container display={"flex"}>
            <Heading size="lg" borderBottom={"5px solid #313134"}>
              Peripherals
            </Heading>
          </Container>
          <Box>{isSmallerThan768 ? MobileProducts : BrowserProducts}</Box>
        </Flex>
        <Footer />
      </Box>
    </Transition>
  );
}
