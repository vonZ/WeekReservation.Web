import { FunctionComponent as FC } from 'react';
import styled from 'styled-components';

interface ICardProps {
  children: any;
}

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 160px;
  background: white;
  padding: 30px;
  border: 1px solid #00000012;
  border-radius: 1px;
  box-shadow: 0px 2px 6px 1px #00000005;
`;

const Card: FC<ICardProps> = ({ children }) => <StyledCard>{children}</StyledCard>;

export default Card;
