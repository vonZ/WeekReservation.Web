import styled from 'styled-components';
import { variables } from '../../../utils';
import { User as UserIcon, Calendar as CalendarIcon } from '../../../media/icons';

export const DateSearchWrapper = styled.div`
  display: inline-flex;
  padding-top: 100px;
  margin-top: -100px;
  justify-content: center;

  // @media (max-width: ${variables.breakpoints.sm}) {
  //   display: block;
  // }
`;

export const StyledInput = styled.input`
  border: none;
  font-size: 1.5rem;
  padding: 14px 30px 14px 37px;
  cursor: pointer;
`;

export const StyledSelect = styled.select`
  border: none;
  height: 100%;
  padding: 0px 20px 0px 25px;
  cursor: pointer;
  background: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const StyledUserIcon = styled(props => <UserIcon {...props} />)`
  position: absolute;
  bottom: 25px;
`;

export const StyledCalendarIcon = styled(props => <CalendarIcon {...props} />)`
  padding: 14px 10px;
  position: absolute;
`;
