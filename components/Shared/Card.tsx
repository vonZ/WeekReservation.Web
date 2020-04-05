import { FunctionComponent as FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ICardProps extends IStyledCardProps {
  children: ReactNode;
}

interface IStyledCardProps {
  padding?: string;
}

const StyledCard = styled.div<IStyledCardProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 160px;
  background: white;
  padding: ${props => props.padding};
  border: 1px solid #00000012;
  border-radius: 1px;
  box-shadow: 0px 2px 6px 1px #00000005;
`;

const Card: FC<ICardProps> = ({ padding = '30px', children }) => <StyledCard padding={padding}>{children}</StyledCard>;

export default Card;
