import { FunctionComponent as FC } from 'react';
import styled from 'styled-components';

interface IStyledPaddingWrapper {
  readonly value?: string;
}

interface IPaddingWrapper extends IStyledPaddingWrapper {
  readonly children: any;
}

const StyledPaddingWrapper = styled.div<IStyledPaddingWrapper>`
  padding: ${({ value }) => value};
`;

export const PaddingWrapper: FC<IPaddingWrapper> = ({ value = '20px', children }) => (
  <StyledPaddingWrapper value={value}>{children}</StyledPaddingWrapper>
);
