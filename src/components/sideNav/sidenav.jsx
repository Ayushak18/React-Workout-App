import { Text, Box } from "@chakra-ui/react";
export const SideNav = () => {
  return (
    <>
      <Box
        w={"25%"}
        p={"10"}
        borderRight={"5px solid   #2982cc "}
        h={"100vh"}
        textAlign={"center"}
        bg={"#2982cc"}
      >
        <Text color={"#fff"} fontSize={"72px"} fontWeight={"700"}>
          WORK
        </Text>
        <Text
          textAlign={"right"}
          color={"#fff"}
          fontSize={"82px"}
          fontWeight={"700"}
        >
          OUT
        </Text>
        <Text color={"#fff"} fontSize={"122px"} fontWeight={"700"}>
          HQ
        </Text>
        <Text
          color={"#fff"}
          my={"28"}
          textAlign={"right"}
          fontWeight={"100"}
        >
          A perfect application to generate personalised workout plans based on
          your preferences using the most advanced AI.
        </Text>
      </Box>
    </>
  );
};
