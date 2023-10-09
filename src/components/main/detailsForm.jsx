import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";

export const DetailsForm = (props) => {
  console.log(props);
  const { setShowForm } = props;
  return (
    <>
      <Box pt={"8"}>
        <Text
          textAlign={"center"}
          color={"  #2982cc "}
          fontSize={"42px"}
          fontWeight={"500"}
          borderBottom={"1px solid #2982cc "}
          mb={"8"}
        >
          Enter your information
        </Text>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            // setShowForm(false);
          }}
        >
          <FormControl>
            <Box mb={"5"}>
              <FormLabel color={"#2982cc"}>Name</FormLabel>
              <Input
                type="text"
                outline={"#2982cc"}
                borderColor={"#2982cc"}
                color={"#2982cc"}
                fontWeight={"100"}
              />
            </Box>
            <Box mb={"5"}>
              <FormLabel color={"#2982cc"}>Age</FormLabel>
              <Input
                type="number"
                outline={"#2982cc"}
                borderColor={"#2982cc"}
              />
            </Box>
            <Box mb={"5"}>
              <FormLabel color={"#2982cc"}>Gender</FormLabel>
              <Select color={"#2982cc"}>
                <option>Male</option>
                <option>Female</option>
              </Select>
            </Box>
            <Box mb={"5"}>
              <FormLabel color={"#2982cc"}>Weight (in KG)</FormLabel>
              <Input
                type="number"
                outline={"#2982cc"}
                borderColor={"#2982cc"}
              />
            </Box>
            <Box mb={"5"}>
              <FormLabel color={"#2982cc"}>
                Target Weight Weight (in KG)
              </FormLabel>
              <Input
                type="number"
                outline={"#2982cc"}
                borderColor={"#2982cc"}
              />
            </Box>
            <Box mb={"5"}>
              <FormLabel color={"#2982cc"}>Height (in cms)</FormLabel>
              <Input
                type="number"
                outline={"#2982cc"}
                borderColor={"#2982cc"}
              />
            </Box>
            <Box mb={"5"}>
              <FormLabel color={"#2982cc"}>
                Workout plan for how many days
              </FormLabel>
              <Input
                type="number"
                outline={"#2982cc"}
                borderColor={"#2982cc"}
              />
            </Box>
            <Box mb={"5"}>
              <FormLabel color={"#2982cc"}>Lifestyle Type</FormLabel>
              <Select color={"#2982cc"}>
                <option>Active</option>
                <option>Normal</option>
                <option>Sedantry</option>
              </Select>
            </Box>
          </FormControl>
          <Button
            w={"100%"}
            bg={"#2982cc"}
            color={"#fff"}
            _hover={"none"}
            py={"6"}
          >
            <input
              type="submit"
              value="Generate Workout Plan"
              className="submit-button"
            />
          </Button>
        </form>
      </Box>
    </>
  );
};
