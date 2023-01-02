import React from 'react';
import { Link } from 'react-router-dom';

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import {
  FaAngleDown,
  FaSearch,
  FaRegUserCircle,
  FaRegListAlt,
  FaCartPlus,
} from 'react-icons/fa';

import './Header.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/slice/authSlice';

function Header() {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  console.log('Header user state:', user);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Box bg='black' w='100%' h='125'>
      <Grid
        w={1200}
        h={125}
        p='0 10px'
        margin='0 auto'
        alignItems='center'
        templateColumns='repeat(4, 1fr)'>
        <GridItem w='280px' padding='0 22px' colSpan={1}>
          <Link to='/'>
            <Image
              width={55}
              m='0 auto'
              src='https://firebasestorage.googleapis.com/v0/b/apple-store-39b14.appspot.com/o/apple-logo.png?alt=media&token=cb5c764a-d239-4e65-a6c6-1431f594d58f'
              alt='Apple logo'
            />
          </Link>
        </GridItem>
        <GridItem w={490} colSpan={2} position='relative' left={-3}>
          <Box className='header-search'>
            <Flex className='header__search-select'>
              <span>Tất cả danh mục</span>
              <Icon as={FaAngleDown} className='select-icon' />
              <Box>
                <UnorderedList className='header-category'>
                  <Link to='/news' className='header-category-item'>
                    <ListItem>iPhone</ListItem>
                  </Link>
                  <Link to='/news' className='header-category-item'>
                    <ListItem>iPad</ListItem>
                  </Link>
                  <Link to='/news' className='header-category-item'>
                    <ListItem>Apple Watch</ListItem>
                  </Link>
                  <Link to='/news' className='header-category-item'>
                    <ListItem>Macbook</ListItem>
                  </Link>
                  <Link to='/news' className='header-category-item'>
                    <ListItem>Airpods</ListItem>
                  </Link>
                  <Link to='/news' className='header-category-item'>
                    <ListItem>iMac, PC</ListItem>
                  </Link>
                  <Link to='/news' className='header-category-item'>
                    <ListItem>Phụ Kiện</ListItem>
                  </Link>
                  <Link to='/news' className='header-category-item'>
                    <ListItem>iPhone Cũ</ListItem>
                  </Link>
                </UnorderedList>
              </Box>
            </Flex>

            <div className='header__search-input '>
              <input
                type='text'
                placeholder='Nhập tên sản phẩm, mã sản phẩm, từ khóa'
                style={{ border: 'none' }}
              />
              <Icon as={FaSearch} className='search-icon' />
            </div>
          </Box>
        </GridItem>

        <GridItem colSpan={1}>
          <Flex position='relative' left={-5}>
            <Box w='100%'>
              <Link to='/news' className='icon-link'>
                <Box w='70px'>
                  <Icon
                    as={FaRegListAlt}
                    className='header-icon'
                    fontSize={30}
                    display='flex'
                    margin='0 auto'
                    color='white'
                  />
                  <Text className='icon-text'>Tin tức</Text>
                </Box>
              </Link>
            </Box>
            <Box w='100%' pr={'15px'}>
              <Link to='/news' className='icon-link'>
                <Icon
                  as={FaCartPlus}
                  className='header-icon'
                  fontSize={30}
                  display='flex'
                  margin='0 auto'
                  color='white'
                />
                <Text className='icon-text'>Giỏ hàng</Text>
              </Link>
            </Box>
            <Box w='100%'>
              {!user.id ? (
                <Link to='/login' className='icon-link'>
                  <Icon
                    as={FaRegUserCircle}
                    className='header-icon'
                    fontSize={30}
                    display='flex'
                    margin='0 auto'
                    color='white'
                  />
                  <Text className='icon-text'>Đăng nhập</Text>
                </Link>
              ) : (
                <div className='user__icon'>
                  <Link to='/admin' className='icon-link'>
                    <Icon
                      as={FaRegUserCircle}
                      className='header-icon'
                      fontSize={30}
                      display='flex'
                      margin='0 auto'
                      color='white'
                    />
                    <Text className='icon-text'>
                      <span>Hi, {user.firstName}</span>
                    </Text>
                    <div className='user__menu'>
                      <ul>
                        {user.isAdmin ? (
                          <Link to='dashboard'>
                            <li>Quản lý</li>
                          </Link>
                        ) : (
                          <div />
                        )}

                        <li>Thông tin</li>
                        <Link to='/logout' onClick={handleLogout}>
                          <li>Đăng xuất</li>
                        </Link>
                      </ul>
                    </div>
                  </Link>
                </div>
              )}
            </Box>
          </Flex>
        </GridItem>
        {/* </Flex> */}
      </Grid>
    </Box>
  );
}

export default Header;
