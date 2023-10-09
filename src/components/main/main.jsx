import { Box, Text, Spinner, Flex } from "@chakra-ui/react";
import { DetailsForm } from "./detailsForm";
import { useState } from "react";

export const Main = () => {
  const [showform, setShowForm] = useState(true);
  return (
    <>
      <Box w={"75%"} px={"10"}>
        <DetailsForm />
      </Box>
    </>
  );
};
