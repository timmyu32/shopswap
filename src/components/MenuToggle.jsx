import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineClose, MdMenu } from "react-icons/md";


const MenuToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


  return (
    <Box display={{ base: "block", md: "none" }} onClick={() => toggle()}>
      {isOpen ? <MdOutlineClose /> : <MdMenu />}
    </Box>
  )
}

export default MenuToggle