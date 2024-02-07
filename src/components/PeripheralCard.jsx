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
export default function PeripheralCard(props) {
  return (
    <Card bg={"blackBrand.300"} overflow={"hidden"} boxShadow="md" w={"400px"}>
      <Image
        src={props.image}
        objectFit={"cover"}
        maxW={{ base: "100%", sm: "400px" }}
        maxH={{ base: "100%", sm: "200px" }}
      />
      <CardBody>
        <Heading size={"md"}>{props.title}</Heading>
        <Text>{props.description}</Text>
      </CardBody>
    </Card>
  
  );
}
