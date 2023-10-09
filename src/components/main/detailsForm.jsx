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
import { useState, useEffect } from "react";

export const DetailsForm = (props) => {
  const [formInput, setFormInput] = useState("");
  useEffect(() => {
    console.log(formInput);
  }, [formInput]);
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
            // console.log(event.target.name.value);
            // console.log(event.target.age.value);
            // console.log(event.target.gender.value);
            // console.log(event.target.weight.value);
            // console.log(
            //   event.target.target_weight.value,
            //   event.target.height.value,
            //   event.target.days.value,
            //   event.target.lifestyle.value
            // );
            console.log(
              `I am ${event.target.age.value} ${event.target.gender.value} with weight of ${event.target.weight.value} kg and height ${event.target.height.value}cm I wanted a ${event.target.days.value} days workout plan so that I will achieve ${event.target.target_weight.value}kg weight and my life style is ${event.target.lifestyle.value}`
            );
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
                name="name"
                required
              />
            </Box>
            <Box mb={"5"}>
              <FormLabel color={"#2982cc"}>Age</FormLabel>
              <Input
                type="number"
                outline={"#2982cc"}
                borderColor={"#2982cc"}
                name="age"
                color={"#2982cc"}
                min={18}
                max={60}
                required
              />
            </Box>
            <Box mb={"5"}>
              <FormLabel color={"#2982cc"}>Gender</FormLabel>
              <Select color={"#2982cc"} name="gender" required>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </Select>
            </Box>
            <Box mb={"5"}>
              <FormLabel color={"#2982cc"}>Weight (in KG)</FormLabel>
              <Input
                type="number"
                outline={"#2982cc"}
                borderColor={"#2982cc"}
                name="weight"
                color={"#2982cc"}
                min={35}
                max={200}
                required
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
                name="target_weight"
                color={"#2982cc"}
                min={45}
                max={100}
                required
              />
            </Box>
            <Box mb={"5"}>
              <FormLabel color={"#2982cc"}>Height (in cms)</FormLabel>
              <Input
                type="number"
                outline={"#2982cc"}
                borderColor={"#2982cc"}
                name="height"
                color={"#2982cc"}
                min={150}
                max={230}
                required
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
                name="days"
                color={"#2982cc"}
                min={1}
                max={30}
                required
              />
            </Box>
            <Box mb={"5"}>
              <FormLabel color={"#2982cc"}>Lifestyle Type</FormLabel>
              <Select color={"#2982cc"} name="lifestyle" required>
                <option value={"active"}>Active</option>
                <option value={"normal"}>Normal</option>
                <option value={"sedantry"}>Sedantry</option>
              </Select>
            </Box>
          </FormControl>

          <Button bg={"#2982cc"} color={"#fff"} _hover={"none"} py={"6"}>
            <input
              type="submit"
              value="Generate Workout Plan"
              className="submit_button"
            />
          </Button>
        </form>
      </Box>
    </>
  );
};
