import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

// Define the type for the props of BaseLayout component
export type BaseLayoutProps = {
    children: React.ReactNode;
};

// Define the BaseLayout component
export const BaseLayout = ({ children }: BaseLayoutProps) => {
    return (
        <Flex
            height="100vh"
            width="100vw"
            bg="orange.300"
            flexDirection="column"
        >
            {/* Content area */}
            <Box p={4} flex={1}>
                {children}
            </Box>
        </Flex>
    );
};
