import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';

function ProductDetail() {
  let { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axiosClient.get(`/api/product/${id}`);
        setData(res);
      } catch (error) {
        return console.log(error);
      }
    };
    getProduct();
  }, [id]);

  return (
    <Box>
      <Container maxW='1200px' margin='0 auto' padding='15px 10px'>
        <Box borderBottom='2px solid #E7E7E7'>
          <Text padding='10px 0' fontSize='18px' fontWeight='bold' color='#333'>
            {data?.name}
          </Text>
        </Box>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} w='100%'>
          <GridItem w='100%'>
            <Box width='100%'>
              {/* <Image width='200px' m='30px auto' src={data?.url} /> */}
            </Box>
          </GridItem>
          <GridItem w='100%'>
            <Box>
              <Text m='20px 0'>Giá: 12.000.000đ - 11.500.000đ</Text>
              <Box display={'flex'}>
                <Box
                  padding={'3px 5px'}
                  border={'1px solid #D1D5DB'}
                  borderRadius='5px'>
                  64GB
                </Box>
                <Box
                  padding={'3px 5px'}
                  border={'1px solid #D1D5DB'}
                  borderRadius='5px'>
                  128GB
                </Box>
                <Box
                  padding={'3px 5px'}
                  border={'1px solid #D1D5DB'}
                  borderRadius='5px'>
                  256GB
                </Box>
              </Box>
              <Text m='15px 0'>Chọn màu</Text>
              <Box display={'flex'}>
                <Box
                  padding={'3px 5px'}
                  border={'1px solid #D1D5DB'}
                  borderRadius='5px'>
                  Đen
                </Box>
                <Box
                  padding={'3px 5px'}
                  border={'1px solid #D1D5DB'}
                  borderRadius='5px'>
                  Trắng
                </Box>
                <Box
                  padding={'3px 5px'}
                  border={'1px solid #D1D5DB'}
                  borderRadius='5px'>
                  Vàng
                </Box>
                <Box
                  padding={'3px 5px'}
                  border={'1px solid #D1D5DB'}
                  borderRadius='5px'>
                  Xanh
                </Box>
              </Box>
            </Box>
            <Button m='10px 0'>Mua ngay</Button>
          </GridItem>

          <GridItem w='100%'>
            <UnorderedList listStyleType='none' fontSize={14}>
              <ListItem>
                <b>Thời gian làm việc: </b>
                07h30 - 20h30
              </ListItem>
              <ListItem>
                <b>Email: </b>danang@applestore.com.vn
              </ListItem>
              <ListItem>
                <b>Showroom 1: </b>123 Hàm Nghi, Quận Thanh Khê, Đà Nẵng
              </ListItem>
              <ListItem>
                <b>Tel: </b>(0236) 3 888 000 <b>Mobile: </b>(84) 0903 555 310
              </ListItem>

              <ListItem>
                <b>Showroom 2: </b>123 Nguyễn Văn Linh, Quận Hải Châu, Đà Nẵng
              </ListItem>
              <ListItem>
                <b>Tel: </b>(0236) 3 888 000 <b>Mobile: </b>(84) 0903 555 310
              </ListItem>
            </UnorderedList>
          </GridItem>
        </Grid>
        <Grid templateColumns='repeat(6, 1fr)' gap={5}>
          <GridItem colSpan={4}>
            <Box
              padding={'3px 5px'}
              border={'1px solid #D1D5DB'}
              borderRadius='5px'>
              <Text fontSize={'18px'} color={'#333'}>
                Mô tả sản phẩm
              </Text>
              <Text>{data?.description}</Text>
            </Box>
            <Box
              padding={'3px 5px'}
              m='20px 0'
              border={'1px solid #D1D5DB'}
              borderRadius='5px'>
              <Text fontSize={'18px'} color={'#333'}>
                Đánh giá sản phẩm
              </Text>
              <Text></Text>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box
              padding={'3px 5px'}
              border={'1px solid #D1D5DB'}
              borderRadius='5px'>
              <Text fontSize='lg'>Tin mới</Text>
              <Text>
                Hướng dẫn quét mã QR Wifi trên iPhone cực dễ 08/04/2022 03:33
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductDetail;
