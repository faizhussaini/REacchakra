import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
const Header = () => {

const {isOpen,onOpen,onClose} =useDisclosure()

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        padding={'0'}
        width={'10'}
        height={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
<DrawerOverlay/>
<DrawerContent>
<DrawerCloseButton/>
<DrawerHeader>Video Mania</DrawerHeader>
<DrawerBody>
    <VStack>
        <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
            <Link to={'/'}>Home</Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
            <Link to={'/videos'}>Videos</Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
            <Link to={'/viedieo?category=free'}>Free Videos</Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
            <Link to={'/upload'}>Upload Videos</Link>
        </Button>
    </VStack>
    <HStack pos={'absolute'} bottom={'10'} left={'0'} bgColor={'GrayText'} width={'full'} justifyContent={'space-evenly'}>
        <Button onClick={onclose} bgColor={'transparent'}  color={'purple'}>
            <Link to={'/login'}>Login</Link>
        </Button>
        <Button onClick={onclose} variant={'outline'} color={'purple'}>
            <Link to={'/signup'}>Sign Up</Link>
        </Button>
    </HStack>
</DrawerBody>
</DrawerContent> 
     </Drawer>
    </>
  );
};

export default Header;
