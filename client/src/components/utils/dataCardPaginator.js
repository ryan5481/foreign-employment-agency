import React, { useState } from 'react';
import { Box, SimpleGrid, Button, Center } from '@chakra-ui/react';

const DataCard = ({ data }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </Box>
  );
};

const DataCardPaginator = ({ dataPerPage, dataArray }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const currentData = dataArray.slice(firstDataIndex, lastDataIndex);

  const totalPages = Math.ceil(dataArray.length / dataPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Box>
      <SimpleGrid columns={3} spacing={4}>
        {currentData.map((item) => (
          <DataCard key={item.id} data={item} />
        ))}
      </SimpleGrid>
      <Center mt={4}>
        <Button mx={2} onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </Button>
        <Button mx={2} onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </Center>
    </Box>
  );
};

export default DataCardPaginator;
