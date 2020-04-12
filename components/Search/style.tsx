import styled from 'styled-components';
import { variables } from '../../utils';

interface ISelectedResultWrapperProps {
  readonly istriggered: boolean;
}

export const SearchInputContainer = styled.div`
  position: absolute;
  bottom: -40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: white;
  border: 1px solid #00000012;
  border-radius: 1px;
  box-shadow: 0px 2px 6px 1px #00000005;

  @media (max-width: ${variables.breakpoints.sm}) {
    position: inherit;
    width: 100%;
  }
`;

export const SearchResultContainer = styled.div`
  padding: 50px 0px;
`;

export const SelectedResultWrapper = styled.div<ISelectedResultWrapperProps>`
  background: white;
  padding: 30px;
  position: fixed;
  border: 1px solid #00000012;
  box-shadow: 0px 2px 6px 1px #00000005;
  width: 100%;
  bottom: 0px;
  top: ${props => (props.istriggered ? '90%' : '100%')};
  transition: all 0.2s ease-out;
`;
