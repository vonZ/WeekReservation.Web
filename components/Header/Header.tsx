import { FunctionComponent as FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-grid-system';

interface IHeaderProps {}
interface ILinkTextProps {
  readonly isactive?: boolean;
}

const Banner = styled.header`
  background-color: white;
  padding: 50px 0px;
  text-align: center;
`;

const LinkText = styled.a<ILinkTextProps>`
  font-size: 14px;
  color: #464646;
  margin-right: 15px;
  cursor: pointer;
  text-decoration: ${props => (props.isactive ? 'underline' : 'none')};
`;

const Header: FC<IHeaderProps> = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Banner>
      <Container>
        <nav>
          <Row justify="center">
            <Col xs={3}>
              <Link href="/">
                <LinkText isactive={pathname === '/'}>Home</LinkText>
              </Link>
            </Col>
            <Col xs={3}>
              <Link href="/about">
                <LinkText isactive={pathname === '/about'}>About</LinkText>
              </Link>
            </Col>
          </Row>
        </nav>
      </Container>
    </Banner>
  );
};

export default Header;
