import styled from 'styled-components';
import { Calendar as CalendarIcon, Check as CheckIcon } from '../../../media/icons';

interface IStyledRoomImageProps {
  readonly imageloaded: boolean;
}

export const StyledTh = styled.th`
  padding: 10px 20px;
  border-bottom: 1px solid #e8e8e8;
`;

export const StyledButton = styled.button`
  padding: 10px 25px;
  background: none;
  border-radius: 2px;
  border: 2px solid #5a5a5a;
  cursor: pointer;
  color: #5a5a5a;
  text-transform: uppercase;
`;

export const FactsText = styled.span`
  font-weight: 400;
  text-align: right;
  padding: 0px 0px 0px 25px;
`;

export const StyledTd = styled.td`
  padding: 20px;
  border-bottom: 1px solid #e8e8e8;
  vertical-align: top;
`;

export const StyledSelectList = styled.select`
  border: 2px solid #5a5a5a;
  height: 100%;
  width: 100%;
  color: #5a5a5a;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px 25px 10px 10px;
  background: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const StyledCalendarIcon = styled(props => <CalendarIcon {...props} />)`
  position: absolute;
`;

export const StyledCheckIcon = styled(props => <CheckIcon {...props} />)`
  transition: opacity 0.6s;
  position: absolute;
`;

export const StyledActionButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  background: #4f78b8;
  color: white;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
`;

export const StyledRoomImage = styled.img<IStyledRoomImageProps>`
  height: 300px;
  width: 100%;
  objectfit: cover;
  display: inherit;
  opacity: ${props => (props.imageloaded ? '1' : '0')};
  transition: opacity 0.6s;
`;
