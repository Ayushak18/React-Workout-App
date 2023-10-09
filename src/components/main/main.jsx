import { Box, Text, Spinner, Flex } from "@chakra-ui/react";
import { DetailsForm } from "./detailsForm";
import { useState } from "react";

export const Main = () => {
  const [showform, setShowForm] = useState(true);
  return (
    <>
      <Box w={"75%"} px={"10"}>
        {showform ? (
          <DetailsForm setShowForm={setShowForm} />
        ) : (
          <Flex alignItems={"center"} justifyContent={"center"} minH={"100vh"}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="#fff"
              color="#2982cc"
              size="xl"
            />
          </Flex>
        )}
      </Box>
    </>
  );
};
