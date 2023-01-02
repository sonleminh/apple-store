import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import './Product.styles.scss';
import { useEffect, useState } from 'react';
import axiosClient from '../../api/axiosClient';
import { Link } from 'react-router-dom';

function Product() {
  const [saleProduct, setSaleProduct] = useState({});
  const [iphoneProduct, setIphoneProduct] = useState({});
  const [ipadProduct, setIpadProduct] = useState({});

  useEffect(() => {
    const getSaleProduct = async () => {
      try {
        const response = await axiosClient.get('/api/product/sale');
        setSaleProduct(response);
      } catch (error) {
        console.log('Failed to get sale product list: ', error);
      }
    };
    getSaleProduct();
  }, []);
  useEffect(() => {
    const getIPhoneProduct = async () => {
      try {
        const response = await axiosClient.get('/api/product/iphone');
        setIphoneProduct(response);
      } catch (error) {
        console.log('Failed to fetch banner list: ', error);
      }
    };
    getIPhoneProduct();
  }, []);
  useEffect(() => {
    const getIpadProduct = async () => {
      try {
        const response = await axiosClient.get('/api/product/ipad');
        setIpadProduct(response);
      } catch (error) {
        console.log('Failed to fetch banner list: ', error);
      }
    };
    getIpadProduct();
  }, []);
  const options = {
    // autoWidth: false,
    items: 5,
    margin: 14,
    rewind: true,
    autoplay: false,
    loop: true,
    dots: false,
  };
  return (
    <Box bg='#f0f0f0'>
      <Container maxW='1200px' margin='0 auto' padding='15px 10px'>
        <Box pt={'15px'} pb={'20px'}>
          <Flex
            width={1180}
            mb={15}
            justifyContent='space-between'
            alignItems='center'
            color='#a22327'>
            <Heading as='h2' fontSize={20} color='#333'>
              SẢN PHẨM KHUYẾN MÃI HOT NHẤT
            </Heading>
            <Text>
              xem tất cả
              <Icon
                as={FaAngleDoubleRight}
                // mt={5}
                ml={5}
                className='heading-icon'
              />
            </Text>
          </Flex>
          {Object.keys(saleProduct).length > 0 && (
            <OwlCarousel options={options}>
              {saleProduct?.map((item) => (
                <Link to={`/product/${item.id}`}>
                  <Box className='product__item' key={item.id}>
                    <Image
                      boxSize='100%'
                      src={item.image.slice(0, 1)}
                      alt='Dan Abramov'
                      p={18}
                      className='product__item-img'
                    />
                    <div className='product__tag-discount'>-10%</div>
                    <a className='product__name' title='cc' href='/'>
                      <h3 className='product__name-label'>{item?.name}</h3>
                    </a>
                    <Flex my='5px'>
                      <span className='product__tag-size'>6.1 inch</span>
                      <span className='product__tag-storage'>128 GB</span>
                    </Flex>
                    <Flex mt={'15px'}>
                      <b className='product__price-cost'>29.990.000 đ</b>
                      <b className='product__price-discount'>29.490.000 đ</b>
                    </Flex>
                  </Box>
                </Link>
              ))}
            </OwlCarousel>
          )}
        </Box>
        <Image
          boxSize='100%'
          mt={10}
          src='https://philong.com.vn/media/banner/17_Mar207b6370ed3ec363bf6f99f421b4991f.png'
          alt='banner'
          className='product__item-img'
        />
        <Box pt={'15px'} pb={'20px'}>
          <Flex
            width={1180}
            mb={15}
            justifyContent='space-between'
            alignItems='center'
            color='#a22327'>
            <Heading as='h2' fontSize={20} color='#333'>
              APPLE IPHONE
            </Heading>
            <Text>
              xem tất cả
              <Icon
                as={FaAngleDoubleRight}
                mt={5}
                ml={5}
                className='heading-icon'
              />
            </Text>
          </Flex>
          {Object.keys(iphoneProduct).length > 0 && (
            <OwlCarousel options={options}>
              {iphoneProduct?.map((item) => (
                <Box className='product__item' key={item.id}>
                  <Image
                    boxSize='100%'
                    src={item.image.slice(0, 1)}
                    alt='Dan Abramov'
                    p={18}
                    className='product__item-img'
                  />
                  <div className='product__tag-discount'>-10%</div>
                  <a className='product__name' title='cc' href='/'>
                    <h3 className='product__name-label'>{item?.name}</h3>
                  </a>
                  <Flex my={'5px'}>
                    <span className='product__tag-size'>6.1 inch</span>
                    <span className='product__tag-storage'>128 GB</span>
                  </Flex>
                  <Flex mt={'15px'}>
                    <b className='product__price-cost'>29.990.000 đ</b>
                    <b className='product__price-discount'>29.490.000 đ</b>
                  </Flex>
                </Box>
              ))}
            </OwlCarousel>
          )}
        </Box>
        <Box pt={'15px'} pb={'20px'}>
          <Flex
            width={1180}
            mb={15}
            justifyContent='space-between'
            alignItems='center'
            color='#a22327'>
            <Heading as='h2' fontSize={20} color='#333'>
              APPLE IPAD
            </Heading>
            <Text>
              xem tất cả
              <Icon
                as={FaAngleDoubleRight}
                mt={5}
                ml={5}
                className='heading-icon'
              />
            </Text>
          </Flex>
          {Object.keys(ipadProduct).length > 0 && (
            <OwlCarousel options={options}>
              {ipadProduct?.map((item) => (
                <Box className='product__item' key={item.id}>
                  <Image
                    boxSize='100%'
                    src={item.image.slice(0, 1)}
                    alt='Dan Abramov'
                    p={18}
                    className='product__item-img'
                  />
                  <div className='product__tag-discount'>-10%</div>
                  <a className='product__name' title='cc' href='/'>
                    <h3 className='product__name-label'>{item?.name}</h3>
                  </a>
                  <Flex my={'5px'}>
                    <span className='product__tag-size'>6.1 inch</span>
                    <span className='product__tag-storage'>128 GB</span>
                  </Flex>
                  <Flex mt={'15px'}>
                    <b className='product__price-cost'>29.990.000 đ</b>
                    <b className='product__price-discount'>29.490.000 đ</b>
                  </Flex>
                </Box>
              ))}
            </OwlCarousel>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Product;
