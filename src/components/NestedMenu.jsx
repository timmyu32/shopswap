import { useState } from 'react';
import { 
  Stack,
  Box,
  Link,
  useDisclosure,
  Button,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

const NestedMenu = ({ menu }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(null);

  return (
    <Stack spacing={4}>
      {menu.map((item, index) => (
        <Box key={index} textAlign={'center'}>
          <Button bg='#7FA9F0' color='white' fontWeight={'700'} w={'100%'} onClick={() => {
            setSelected(item);
            onOpen();
          }}>
            {item.title}
          </Button>
          <Drawer
            placement='bottom'
            isOpen={isOpen && selected === item}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>{item.title}</DrawerHeader>
              <DrawerBody>
                {item.children && 
                  item.children.map((child, childIndex) => (
                    <Stack key={childIndex} spacing={2} flex={1}>   
                      {child.children ? (
                        <Flex flex={1}  >
                          <Button m={'0 auto'} onClick={() => setSelected(child)}>
                            {child.title}
                          </Button>
                        </Flex>
                      ) : (
                        <Link as={RouterLink} to={child.path}>
                          {child.title}
                        </Link>
                      )}
                      {child.children && 
                        <Drawer
                          isOpen={selected === child}
                          placement="right"
                          onClose={() => setSelected(null)}
                        >
                          <DrawerOverlay />
                          <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>{child.title}</DrawerHeader>
                            <DrawerBody>
                              {child.children.map((grandchild, grandchildIndex) => (
                                <Link as={RouterLink} to={grandchild.path} key={grandchildIndex}>
                                  {grandchild.title}
                                </Link>
                              ))}
                            </DrawerBody>
                          </DrawerContent>
                        </Drawer>
                      }
                    </Stack>
                  ))
                }
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      ))}
    </Stack>
  );
}
export default NestedMenu
