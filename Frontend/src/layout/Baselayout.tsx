import {Box, Flex} from '@chakra-ui/react'
import React from 'react'

export type BaseLayoutProps = {
    children: React.ReactNode;
}

export const BaseLayout = ({children}:BaseLayoutProps)  => {
    return (
        <Flex 
        height="100vh" 
        width={"100vw"} 
        bg={"orange.200"}
        flexDirection={"column"}
        >
            
        <Box h={50} bg={"orange.400"}></Box>
            <Box p={4} flex={1}>
                {children}
            </Box>  
        </Flex>
    )
};
