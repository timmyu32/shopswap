import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/'>
      <Box>
          <Text fontSize="3xl" fontWeight="bold">
              ShopSwap
          </Text>
      </Box>
    </Link>
  )
}

export default Logo