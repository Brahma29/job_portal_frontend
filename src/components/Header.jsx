import { Box, styled } from '@mui/material';
import React from 'react';
import headerBanner from '../images/banner.jpg';
import SearchInputEl from './SearchInputEl';

const StyledHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  minHeight: 400,
  alignItems: 'center',
  backgroundImage: `url(${headerBanner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: theme.palette.secondary.main,
}));

const Header = () => {
  return (
    <>
      <StyledHeader>
        <SearchInputEl />
      </StyledHeader>
    </>
  );
};

export default Header;
