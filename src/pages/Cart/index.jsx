import { ChevronRightIcon, Icon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useNumberInput,
} from '@chakra-ui/react';
import { FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Cart() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 10,
      //   precision: 2,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <Box bg='#f0f0f0'>
      <Container maxW='1200px' margin='0 auto' padding='15px 10px'>
        <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>
          <BreadcrumbItem>
            <Link to={'/'}>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Giỏ hàng</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box
          w={'700px'}
          m='0 auto'
          p='20px'
          boxShadow={'0px 4px 4px rgb(0 0 0 / 25%)'}
          bg='white'
          //   borderRadius='15px'
        >
          <Text fontSize={'20px'}>Giỏ hàng</Text>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Chọn</Th>
                  <Th>Tên sản phẩm</Th>
                  <Th isNumeric>Số lượng</Th>
                  <Th isNumeric>Giá</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Checkbox defaultChecked />
                  <Td>
                    <Image
                      boxSize='80px'
                      objectFit={'cover'}
                      src='https://firebasestorage.googleapis.com/v0/b/apple-store-39b14.appspot.com/o/iPhone%2013%20Pro%20Max%20128GB%20Gold.webp?alt=media&token=2377fb13-ac9a-401f-b497-b88ef4075001'
                    />
                    <Text fontSize={'16px'} fontWeight={'bold'}>
                      iPhone 12 Pro 256GB
                    </Text>
                  </Td>
                  <Td isNumeric>
                    <HStack maxW='150px'>
                      <Button {...dec} size='sm'>
                        -
                      </Button>
                      <Input
                        {...input}
                        width='50px'
                        size='sm'
                        textAlign={'center'}
                      />
                      <Button {...inc} size='sm'>
                        +
                      </Button>
                    </HStack>
                  </Td>
                  <Td>
                    <Text color={'var(--primary)'} fontWeight='700'>
                      12.290.000
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Checkbox defaultChecked />
                  <Td>
                    <Image
                      boxSize='80px'
                      objectFit={'cover'}
                      src='https://firebasestorage.googleapis.com/v0/b/apple-store-39b14.appspot.com/o/iPhone%2013%20Pro%20Max%20128GB%20Gold.webp?alt=media&token=2377fb13-ac9a-401f-b497-b88ef4075001'
                    />
                    <Text fontSize={'16px'} fontWeight={'bold'}>
                      iPhone 12 Pro 256GB
                    </Text>
                  </Td>
                  <Td isNumeric>
                    <HStack maxW='150px'>
                      <Button {...dec} size='sm'>
                        -
                      </Button>
                      <Input
                        {...input}
                        width='50px'
                        size='sm'
                        textAlign={'center'}
                      />
                      <Button {...inc} size='sm'>
                        +
                      </Button>
                    </HStack>
                  </Td>
                  <Td>
                    <Text color={'var(--primary)'} fontWeight='700'>
                      12.290.000
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Checkbox defaultChecked />
                  <Td>
                    <Image
                      boxSize='80px'
                      objectFit={'cover'}
                      src='https://firebasestorage.googleapis.com/v0/b/apple-store-39b14.appspot.com/o/iPhone%2013%20Pro%20Max%20128GB%20Gold.webp?alt=media&token=2377fb13-ac9a-401f-b497-b88ef4075001'
                    />
                    <Text fontSize={'16px'} fontWeight={'bold'}>
                      iPhone 12 Pro 256GB
                    </Text>
                  </Td>
                  <Td isNumeric>
                    <HStack maxW='150px'>
                      <Button {...dec} size='sm'>
                        -
                      </Button>
                      <Input
                        {...input}
                        width='50px'
                        size='sm'
                        textAlign={'center'}
                      />
                      <Button {...inc} size='sm'>
                        +
                      </Button>
                    </HStack>
                  </Td>
                  <Td>
                    <Text color={'var(--primary)'} fontWeight='700'>
                      12.290.000
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
}

export default Cart;
