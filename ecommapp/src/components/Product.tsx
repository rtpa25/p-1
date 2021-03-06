/** @format */

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Info = styled.div`
  opacity: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease;
`;
const Container = styled.div`
  flex: 1;
  min-width: 17rem;
  padding: 1rem;
  cursor: pointer;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  border-radius: 50%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.7rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

interface ProductProps {
  img: string;
  id: string;
}
const Product: React.FC<ProductProps> = ({ img, id }) => {
  return (
    <Container className='m-1.5 h-80 flex items-center justify-center bg-blue-50 relative'>
      <Circle className='absolute bg-white h-60 w-60' />
      <img src={img} alt='' className='z-10 w-full h-full' />
      <Info className='absolute z-20 flex items-center justify-center w-full h-full '>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Link to={`/product/${id}`}>
          <Icon>
            <SearchOutlined />
          </Icon>
        </Link>

        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
