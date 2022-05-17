import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ErrorDiv, ErrorImg, ErrorP, LinkP } from './NotFound.styles';
import error from './../../assets/images/error.png';

const NotFound: React.FC = () => {
  return (
    <Container>
      <ErrorP>
        Not found this Page
      </ErrorP>
      <LinkP>
        <Link to="/">Go Home</Link>
      </LinkP>
      <ErrorDiv>
        <ErrorImg src={error} alt='Error' />
      </ErrorDiv>
    </Container>
  )
}

export default NotFound;