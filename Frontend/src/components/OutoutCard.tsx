import {Box,Center} from '@chakra-ui/react'

export const Card = ({children}:{children: React.ReactNode}) => {
    return (
        <Center>
            <Box 
            bg={"white"} 
            w={400} 
            h={400} 
            boxShadow={"lg"} 
            borderRadius={10} 
            p={4}
            >
                {children}
            </Box>
        </Center>
    )
}