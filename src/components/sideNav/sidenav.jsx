import { Text, Box } from "@chakra-ui/react";
export const SideNav = () => {
  return (
    <>
      <Box
        w={"25%"}
        p={"10"}
        borderRight={"10px solid #9C8A5A"}
        h={"100vh"}
        textAlign={"center"}
      >
        <Text color={"#9C8A5A"} fontSize={"72px"} fontWeight={"700"}>
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
        <Text color={"#9C8A5A"} fontSize={"122px"} fontWeight={"700"}>
          HQ
        </Text>
        <Text color={"#9C8A5A"} my={"28"} textAlign={"right"}>
          A perfect application to generate personalised workout plans based on
          your preferences using the most advanced AI.
        </Text>
      </Box>
    </>
  );
};
