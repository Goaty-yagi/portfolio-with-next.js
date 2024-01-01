import { Flex, Box, Heading, Text, Divider } from "@chakra-ui/react";
import { openWindow } from "../commons/footer";
import { CustomImage } from "../commons";
import { PiCertificateDuotone } from "react-icons/pi";

export default function Certifications() {
  const certifications = [
    {
      category: "aws",
      icon: "aws-logo.svg",
      name: "AWS Certified Cloud Practitioner",
      url: "https://www.credly.com/badges/83a1ce2a-70d5-4498-99c3-9d34a4dfccab/linked_in_profile",
    },
    {
      category: "python",
      icon: "python-logo.svg",
      name: "PCAP – Certified Associate in Python Programming",
      url: "https://verify.openedg.org/?id=edKm.8BVu.VEaG",
    },
    {
      category: "js",
      icon: "javascript-logo.svg",
      name: "General Assembly JavaScript Development",
      url: "https://drive.google.com/file/d/1bUWCbzCqu4oOuF8SxpynQVxpMu-8SP-c/view",
    },
  ];
  return (
    <Flex ml="1rem" flexDirection={"column"}>
      <Heading as="h2" size="md">
        Certifications
      </Heading>
      <Box spacing={4} display="block">
        {certifications.map((c, index) => (
          <Flex
            key={index}
            m={"0.8rem 0"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              minW={"40px"}
              h={"40px"}
              position={"relative"}
              bg={c.category === "aws" ? "white" : ""}
              borderRadius={c.category === "aws" ? "5px" : ""}
            >
              <CustomImage
                props={{
                  src: `/svgs/${c.icon}`,
                  alt: c.icon,
                  layout: "fill",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box flexGrow={1}>
              <Text ml={"0.5rem"} fontWeight={"boid"}>
                {c.name}
              </Text>
            </Box>
            <Flex
              onClick={() => {
                openWindow(c.url);
              }}
              minW={"2.5rem"}
              alignItems={"center"}
              border={"solid gray"}
              borderRadius={"10px"}
              p={"0.3rem"}
              transition={"300ms"}
              cursor={"pointer"}
              _hover={{
                border: "solid #ECE698",
              }}
            >
              <PiCertificateDuotone fontSize={"1.5rem"} />
            </Flex>
          </Flex>
        ))}
      </Box>
      <Divider />
    </Flex>
  );
}
