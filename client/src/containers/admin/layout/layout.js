import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../../components/navigation/sideBar";

const Layout = ({ children }) => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" p="4">
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
