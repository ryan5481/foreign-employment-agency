import React from 'react';
import { Box } from '@chakra-ui/react';

const PdfViewer = ({ pdfUrl }) => {
  return (
    <Box>
      <iframe
        src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
        title="PDF Viewer"
        width="800px"
        height="700px"
      ></iframe>
    </Box>
  );
};

export default PdfViewer;
