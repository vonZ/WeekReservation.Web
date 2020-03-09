import { FunctionComponent as FC } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

interface IBackgroundImageProps {
  bgImageUrl: string;
  collapse?: boolean;
}

const StyledBackgroundImage = styled.div<IBackgroundImageProps>`
  height: ${props => (props.collapse ? '250px' : '400px')};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
  background-image: ${props => `url(${props.bgImageUrl})`};
  transition: 0.4s ease-in-out;
`;

const BackgroundImage: FC<IBackgroundImageProps> = ({ bgImageUrl, collapse = false }) => (
  <LazyLoad offset={300} height={400} resize={true} once={true}>
    <StyledBackgroundImage collapse={collapse} bgImageUrl={bgImageUrl} />
  </LazyLoad>
);

export default BackgroundImage;
