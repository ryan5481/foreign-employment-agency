import React, { useState } from 'react';
import CategoryCard from './card/categoryCard';
import { ChakraProvider, Box, Flex, Button, Grid } from '@chakra-ui/react';

const itemsPerPage = 3; // Number of items per page

const Pagination = ({ props }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = props.slice(startIndex, endIndex);

    const totalPages = Math.ceil(props.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <ChakraProvider>
            <Box pb={5}>
                <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }} p={10} gap={10}>

                    <CategoryCard jobsList={props} />
                </Grid>
                <Flex justify="center" marginTop="1rem">
                    <Button
                        onClick={handlePrevPage}
                        colorScheme="blue"
                        disabled={currentPage === 1}
                        rounded={"full"}
                    >
                        Prev
                    </Button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <Button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            colorScheme={currentPage === index + 1 ? 'blue' : 'gray'}
                            marginLeft="0.5rem"
                            rounded={"full"}
                        >
                            {index + 1}
                        </Button>
                    ))}

                    <Button
                        onClick={handleNextPage}
                        colorScheme="blue"
                        disabled={currentPage === totalPages}
                        marginLeft="0.5rem"
                        rounded={"full"}
                    >
                        Next
                    </Button>
                </Flex>
            </Box>
        </ChakraProvider>
    );
};

export default Pagination;
