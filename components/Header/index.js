import Link from 'next/link';
import { useRouter } from 'next/router';
import { LinkText } from './styles';
import { StateProvider, useStateValue } from '../../lib/state';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import SvgLogo from '../../images/chLogo';

const Banner = styled.header`
  background-color: #003a5d;
  padding: 50px 0px;
  text-align: center;
`;

const LogoBg = styled.div`
  display: inline-block;
  background: white;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  top: -30px;
`;

const Header = () => {
  const router = useRouter();
  const [{ theme }, dispatch] = useStateValue();
  // console.log(theme);

  const { pathname } = router;
  return (
    <Banner>
      <Container>
        <nav>
          <Row justify="center">
            {/* <Col xs={3}>
            <LogoBg>
              <SvgLogo />
            </LogoBg>
          </Col> */}
            <Col xs={3}>
              <Link href="/">
                <a>
                  <LinkText isActive={pathname === '/' && 'is-active'}>Home</LinkText>
                </a>
              </Link>
            </Col>
            <Col xs={3}>
              <Link href="/about">
                <a>
                  <LinkText isActive={pathname === '/about' && 'is-active'}>About</LinkText>
                </a>
              </Link>
            </Col>
          </Row>
        </nav>
      </Container>
    </Banner>
  );
};

export default Header;
