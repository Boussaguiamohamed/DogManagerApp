import { useState } from "react";
import { BaseLayout } from "../layout/Baselayout";
import { Box, Button, Center, Input, Spacer, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

// Define the type for a dog
type Dog = {
    name: string;
    age: number;
};

// Define the type for the form data
type FormData = {
    name: string;
    age: number;
};

export const HomePage = () => {
    // State to store the list of dogs
    const [dogs, setDogs] = useState<Dog[]>([]);

    const [latestUpdateTime, setLatestUpdateTime] = useState<string>("never");

    // Form handling using react-hook-form
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    // Function to handle dog registration
    const handleRegisterDog = (data: FormData) => {
        // Create a new dog object from the form data
        const newDog: Dog = {
            name: data.name,
            age: data.age
        };

        // Add the new dog to the list of dogs
        setDogs([...dogs, newDog]);

        // Reset the form fields
        reset();

        // Update the latest update time
        setLatestUpdateTime(new Date().toLocaleString());
    };

    return (
        <BaseLayout>
            <Center h="full">
                <Box bg="orange.200" w={800} h={600} boxShadow="lg" borderRadius={10} p={4} border="1px solid orange">
                    {/* Form for registering a dog */}
                    <Box mt={10}></Box>
                    <Box display="flex" flexDirection="row">
                        <Box flex={1}>
                            <form onSubmit={handleSubmit(handleRegisterDog)}>
                                <Box mt={1} width={"200px"}>
                                    <Text fontSize="xl" color="black">
                                        Name:
                                    </Text>
                                    {/* Input field for dog's name */}
                                    <Input id="nameInput" placeholder="Enter dog's name" {...register("name", { required: true })} bg={"white"}/>
                                    {errors.name && <Text color="red">Name is required</Text>}
                                </Box>
                                <Box mt={4} width={"200px"}>
                                    <Text fontSize="xl" color="black">
                                        Age:
                                    </Text>
                                    {/* Input field for dog's age */}
                                    <Input id="ageInput" placeholder="Enter dog's age" type="number" {...register("age", { required: true })} bg={"white"} />
                                    {errors.age && <Text color="red">Age is required</Text>}
                                </Box>
                                <Box width={"200px"}>
                                    {/* Button to register the dog */}
                                    <Button mt={4} colorScheme="teal" size="lg" width="100%" type="submit" disabled={Object.keys(errors).length > 0}>
                                        Register Dog
                                    </Button>
                                </Box>
                            </form>
                            <Spacer />
                            <Box width={"200px"}>
                                {/* Button to clear the list of dogs */}
                                <Button mt={4} colorScheme="teal" size="lg" width="100%" 
                                    onClick={() => {
                                        setDogs([]);
                                    }}
                                >
                                    Clear List
                                </Button>
                                {/* Button to send the list of dogs to the backend */}
                                <Button mt={4} colorScheme="teal" size="lg" width="100%" 
                                    onClick={async () => {
                                        console.log(dogs);
                                        const response = await fetch("/api/dog", {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify(
                                                dogs.map((dog) => ({
                                                    name: dog.name,
                                                    age: dog.age
                                                }))
                                            )
                                        });
                                        if (response.ok) {
                                            alert("Dogs sent to backend successfully");
                                        }else{
                                            alert("Error sending dogs to backend");
                                        }
                                    }}
                                >
                                    Send List to backend
                                </Button>
                                {/* Button to clear the list of dogs in the backend */}
                                <Button mt={4} colorScheme="teal" size="lg" width="100%" 
                                    onClick={async () => {
                                        console.log(dogs);
                                        const response = await fetch("/api/dog", {
                                            method: "DELETE",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                        });
                                        if (response.ok) {
                                            alert("Dogs cleared in backend successfully");
                                        }else{
                                            alert("Error clearing dogs in backend");
                                        }
                                    }}
                                >
                                    Clear List in backend
                                </Button>
                            </Box>
                        </Box>
                        {/* Display the list of dogs */}
                        <Box flex={1}  boxShadow="lg" borderRadius={10} p={4} border="1px solid black" bg={"white"}>
                            <Text fontSize="4xl" color="black" align="center">
                                Dogs:
                            </Text>
                            <Box mt={5}></Box>
                            {dogs.map((dog, index) => (
                                <Text key={index}>
                                    {dog.name} is {dog.age} years old.
                                </Text>
                            ))}
                            <Box mt={5}></Box>
                            <Text mt={5} color="black">
                                Latest Update Time: {latestUpdateTime?.toLocaleString()}
                            </Text>    
                        </Box>
                    </Box>
                </Box>
            </Center>
        </BaseLayout>
    );
};
