import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

export const DetailsForm = () => {
  const [formInput, setFormInput] = useState("");
  const [workoutData, setWorkoutData] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // Data which will send to chat gpt as post request
    let data = JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: formInput,
        },
      ],
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.openai.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",

        // Tried .env file for securing sensitive data but it is not working for some reason
        Authorization: `Bearer ${process.env.GPT_TOKEN}`,
      },
      data: data,
    };

    if (formInput.length) {
      axios
        .request(config)
        .then((response) => {
          setLoader(false);
          setWorkoutData(response.data.choices[0].message.content);
        })
        .catch((error) => {
          alert(error);
          setLoader(false);
        });
    }
  }, [formInput]);
  if (workoutData.length === 0 && loader === false) {
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
              setFormInput(
                `I am ${event.target.age.value} ${event.target.gender.value} with weight of ${event.target.weight.value} kg and height ${event.target.height.value}cm I wanted a ${event.target.days.value} days workout plan so that I will achieve ${event.target.target_weight.value}kg weight and my life style is ${event.target.lifestyle.value}`
              );
              setLoader(true);
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
  } else if (workoutData.length && loader === false) {
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
            Personalised Work-Out Plan
          </Text>
          {workoutData.split("\n\n").map((value, index) => {
            return (
              <>
                {index === 0 ? (
                  <Text fontWeight={"100"} my={"6"} color={"#2982cc"}>
                    {value}
                  </Text>
                ) : (
                  <Text fontWeight={"100"} my={"4"} color={"#2982cc"}>
                    {value}
                  </Text>
                )}
              </>
            );
          })}
          <Button
            bg={"#2982cc"}
            color={"#fff"}
            _hover={"none"}
            py={"6"}
            className="submit_button"
            fontWeight={"100"}
            onClick={() => {
              setWorkoutData("");
              setLoader(false);
            }}
          >
            Generate Another Workout Plan
          </Button>
        </Box>
      </>
    );
  } else if (loader) {
    return (
      <>
        <Flex alignItems={"center"} justifyContent={"center"} minH={"100vh"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="#fff"
            color="#2982cc"
            size="xl"
          />
        </Flex>
      </>
    );
  }
};
