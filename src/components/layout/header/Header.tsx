import React from 'react';
import Link from 'next/link';
import { Button, Flex, Spacer } from '@chakra-ui/react';
import MenuHam from './Menu';

const Header = () => {
  return (
    <header>
      {/* <Flex className='container items-center'> */}
      {/* tailwind css와 chakra ui 컴포넌트를 섞어 쓸 수는 있으나 권장하지 않는다고 함(클로드가) */}
      <Flex className='container-sm items-center'>
        <h1>
          <Link href={'/'}>logo</Link>
        </h1>
        <Spacer />
        <div>
          <Button colorScheme='teal' variant='ghost'>
            알림
          </Button>
          <Button colorScheme='teal' variant='ghost'>
            검색
          </Button>
          <MenuHam />
        </div>
      </Flex>
    </header>
  );
};

export default Header;
