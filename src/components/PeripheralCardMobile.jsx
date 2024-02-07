import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
export default function PeripheralCardMobile(props) {
  return (
    <Card bg={"blackBrand.300"} overflow={"hidden"} boxShadow="md" w={"300px"}>
      <Image
        src={props.image}
        objectFit={"cover"}
        maxW={{ base: "100%", sm: "300px" }}
        maxH={{ base: "100%", sm: "100px" }}
      />
      <CardBody>
        <Heading size={"md"}>{props.title}</Heading>
        <Text>{props.description}</Text>
      </CardBody>
    </Card>
  
  );
}
