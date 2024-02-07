import React from "react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  Flex,
  Image,
  Heading,
  VStack,
  HStack,
  Container,
  useMediaQuery,
} from "@chakra-ui/react";
import joan from "../assets/joan.jpeg";
import Transition from "../Transition";
import ProjectCard from "../components/ProjectCard";
import espcharts from "../assets/espcharts.png";
import burger from "../assets/burger.png";
import careercrush from "../assets/ccweb.png";
import Footer from "../layout/Footer";
import TransitionSlow from "../TransitionSlow";
import ProjectCardMobile from "../components/ProjectCardMobile";
const steps = [
  {
    title: "2020",
    description: "Started Bachelor in Computer Science - A.Xh University",
  },
  { title: "2021", description: "Customer Advisor - Neptun" },
  { title: "2022", description: "Customer Advisor - Neptun" },
  { title: "2023 Q1", description: "Exchange Program - Sofia, Bulgaria" },
  {
    title: "2023 Q2",
    description: "Finished Bachelor in Computer Science - A.Xh University",
  },
  { title: "2023 Q3", description: "Software Engineering Internship - Taleas" },
  {
    title: "2023 Q3",
    description: "Started Masters in Computer Science - FSHN Tirana",
  },
  { title: "2023 Q4", description: "Junior Software Engineer - Tegeria" },
  { title: "???", description: "???" },
];
export default function Career() {
  const [isSmallerThan768] = useMediaQuery("(max-width:768px)");
  const { activeStep } = useSteps({
    index: 8,
    count: steps.length,
  });

  const WebProject = (
    <Box mt={"10px"}>
      <HStack gap={10}>
        <ProjectCard
          link={"https://github.com/staticvoidjoan/espcharts"}
          image={espcharts}
          objectPosition={"top"}
          title={"ESPCHarts"}
          description={"Esports Tournament Manager"}
        />
        <ProjectCard
          link={"https://moonwhiskey.itch.io/not-on-my-burger"}
          image={burger}
          title={"Not On My Burger"}
          description={"Arcade Style Game made in Godot"}
        />
        <ProjectCard
          link={"https://career-crush.com/"}
          image={careercrush}
          title={"CareerCrush"}
          description={"Job Matching Application"}
        />
      </HStack>
    </Box>
  );

  const MobileProjects = (
    <Box mt={"10px"}>
      <VStack gap={6}>
        <ProjectCardMobile
          link={"https://github.com/staticvoidjoan/espcharts"}
          image={espcharts}
          objectPosition={"top"}
          title={"ESPCHarts"}
          description={"Esports Tournament Manager"}
        />
        <ProjectCardMobile
          link={"https://moonwhiskey.itch.io/not-on-my-burger"}
          image={burger}
          title={"Not On My Burger"}
          description={"Arcade Style Game made in Godot"}
        />
        <ProjectCardMobile
          link={"https://career-crush.com/"}
          image={careercrush}
          title={"CareerCrush"}
          description={"Job Matching Application"}
        />
      </VStack>
    </Box>
  );

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
        mb={10}
      >
        <Flex
          p={5}
          mt={10}
          justifyContent="center"
          alignItems={"center"}
          gap={"5rem"}
          flexDir={"column"}
        >
          <Image src={joan} boxSize="350px" />
          <VStack alignItems={"flex-start"} mb={20}>
            <Heading size="lg" borderBottom={"5px solid #313134"}>
              Timeline
            </Heading>
            <Stepper
              index={activeStep}
              orientation="vertical"
              height={"300px"}
              gap={0}
            >
              {steps.map((step, index) => (
                <TransitionSlow key={index}>
                  <Step>
                    <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={"?"}
                      />
                    </StepIndicator>
                    <Box flexShrink={0}>
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription
                        color="blackBrand.300"
                        fontSize={isSmallerThan768 ? "10" : ""}
                      >
                        {step.description}
                      </StepDescription>
                    </Box>
                    <StepSeparator />
                  </Step>
                </TransitionSlow>
              ))}
            </Stepper>
          </VStack>
          {isSmallerThan768 ? MobileProjects : WebProject}
        </Flex>
        <Footer />
      </Box>
    </Transition>
  );
}
