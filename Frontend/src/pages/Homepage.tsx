import { useState } from "react";
import { BaseLayout } from "../layout/Baselayout";
import { Box, Button, Center, Input, Spacer, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type Dog = {
    name: string;
    age: number;
};

type FormData = {
    name: string;
    age: number;
};

export const HomePage = () => {
    const [dogs, setDogs] = useState<Dog[]>([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const handleRegisterDog = (data: FormData) => {
        const newDog: Dog = {
            name: data.name,
            age: data.age
        };
        setDogs([...dogs, newDog]);
        reset();
    };

    return (
        <BaseLayout>
            <Center h="full">
                <Box bg="white" w={500} h={500} boxShadow="lg" borderRadius={10} p={4} border="1px solid orange">
                  
                    <Box mt={10}></Box>
                    <Box display="flex" flexDirection="row">
                        <Box flex={1}>
                            <form onSubmit={handleSubmit(handleRegisterDog)}>
                                <Box>
                                    <Text fontSize="xl" color="blue.900">
                                        Name:
                                    </Text>
                                    <Input id="nameInput" placeholder="Enter dog's name" {...register("name", { required: true })} />
                                    {errors.name && <Text color="red">Name is required</Text>}
                                </Box>
                                <Box mt={4}>
                                    <Text fontSize="xl" color="blue.900">
                                        Age:
                                    </Text>
                                    <Input id="ageInput" placeholder="Enter dog's age" type="number" {...register("age", { required: true })} />
                                    {errors.age && <Text color="red">Age is required</Text>}
                                </Box>
                                <Box width={"200px"}>
                                    <Button mt={4} colorScheme="teal" size="lg" width="100%" type="submit" disabled={Object.keys(errors).length > 0}>
                                        Register Dog
                                    </Button>
                                </Box>
                            </form>
                            <Spacer />
                            <Box width={"200px"}>
                                <Button mt={4} colorScheme="teal" size="lg" width="100%" >
                                    Send List to backend
                                </Button>
                            </Box>
                        </Box>
                        <Box flex={1} ml={4} boxShadow="lg" borderRadius={10} p={4} border="1px solid black">
                            <Text fontSize="xl" color="blue.900" align="center">
                                Dogs:
                            </Text>
                            <Box mt={5}></Box>
                            {dogs.map((dog, index) => (
                                <Text key={index}>
                                    {dog.name} is {dog.age} years old.
                                </Text>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Center>
        </BaseLayout>
    );
};
